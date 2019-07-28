import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    if (!this.props.posts) return "Loading..";
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle align icon user" />
          <div className="content">
            <div className="description">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
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
    posts: state.posts.data
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostList);
