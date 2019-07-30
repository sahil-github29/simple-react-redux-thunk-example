import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList() {
    if (!this.props.users) return "Loading..";
    return this.props.users.map(user => {
      return (
        <div className="item" key={user.data.email}>
          <i className="large middle align icon user" />
          <div className="content">
            <div className="description">
              <h1>{user.data.name}</h1>
              <p>{user.data.email}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
