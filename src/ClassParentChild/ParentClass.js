import React, { Component } from "react";
import ChildClass from "./ChildClass";

export default class ParentClass extends Component {
  state = {
    firstName: "Patar",
    lastName: "Siahaan",
  };
  render() {
    return (
      <div>
        <ChildClass firstName={this.state.firstName} lastName={this.state.lastName}></ChildClass>
      </div>
    );
  }
}
