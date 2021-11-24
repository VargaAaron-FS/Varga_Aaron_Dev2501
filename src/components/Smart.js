import React, { Component } from "react";

class Smart extends Component {
  render() {
    return (
      <div className="Smart">
        <h1>{this.props.paraText}heading</h1>
        <p>{this.props.userName}username</p>
      </div>
    );
  }
}

export default Smart;
