import React, { Component } from "react";
import "./UserInput.css";

class UserInput extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <input
            type="email"
            className="form-control"
            placeholder="Enter User Name"
            onChange={this.props.changed}
            value={this.props.username}
          />
        </div>
      </div>
    );
  }
}

export default UserInput;
