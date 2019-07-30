import React, { Component } from "react";
import PostList from "./PostList";
import UserList from "./UserList";

class App extends Component {
  state = {
    currentTab: "posts"
  };
  btnClicked = btn => {
    this.setState({ currentTab: btn });
  };

  render() {
    let currentComponent = <PostList />;
    switch (this.state.currentTab) {
      case "posts":
        currentComponent = <PostList />;
        break;
      case "users":
        currentComponent = <UserList />;
        break;
      default:
        currentComponent = <PostList />;
    }
    console.log(this.state.currentTab);
    return (
      <div className="ui container">
        <button onClick={btn => this.btnClicked("posts")}>Get Post</button>
        <button onClick={btn => this.btnClicked("users")}>Get User</button>
        {currentComponent};
      </div>
    );
  }
}

export default App;
