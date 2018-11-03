import React, { Component } from "react";
import UserList from "./UserList";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="lander">
          <h1>Hello World</h1>
          <UserList />
        </div>
      </div>
    );
  }
}
