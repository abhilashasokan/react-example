import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "sweetgodzillas"
    }
  }
  UsernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  render() {
    return (
      <div className="App container">
        <Breadcrumb/>
        <UserInput username={this.state.username} changed={this.UsernameChangedHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
