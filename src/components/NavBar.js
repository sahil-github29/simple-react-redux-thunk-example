import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <button onClick={() => this.props.handleClick("post")}>Post</button>
        <button onClick={() => this.props.handleClick("user")}>User</button>
      </div>
    );
  }
}

export default NavBar;
