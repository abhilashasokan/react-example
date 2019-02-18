import React, { Component } from "react";
import "./UserOutput.css";

class UserOutput extends Component {
  render() {
    return (
      <div className="card user-output-card">
        <div className="card-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel
          rem facilis perspiciatis quo animi voluptatum, nemo nostrum quibusdam
          magnam maiores nesciunt ipsum, quos quam. Quisquam tenetur eos
          consequatur placeat amet illum, quaerat dicta cumque necessitatibus!
          Reprehenderit enim iusto unde, inventore, blanditiis at repellendus
          laborum aliquam, cupiditate nisi quod placeat.
        </div>
        <div className="alert alert-info">
          User Name inputed is <strong className="username">{this.props.username}</strong>!
        </div>
      </div>
    );
  }
}

export default UserOutput;
