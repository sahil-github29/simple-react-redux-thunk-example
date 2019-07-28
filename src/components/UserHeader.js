import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;

    if (!user) return null;

    return <div className="header">{user.data.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // it is better to do calculation here and send little data to the component
  return { user: state.users.find(user => user.data.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
