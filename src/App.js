import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import UserOutput from "./UserOutput/UserOutput";
import Persons from "./Persons/Persons";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "sweetgodzillas",
      persons: [
        { id:'1',name: "Max", age: 28 },
        { id:'2',name: "Maximus", age: 30 },
        { id:'3',name: "Logan", age: 45 }
      ],
      showPersons: false
    };
  }
  UsernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    });
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //Make a copy of person index that we want to change
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //Make a copy of all persons state
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }
  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }
  render() {
    return (
      <div className="App container">
        <Breadcrumb />
        <UserInput
          username={this.state.username}
          changed={this.UsernameChangedHandler}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />

        {this.state.showPersons ? (
          this.state.persons.map((person, index) => {
            return <Persons 
            // click={() => this.deletePersonsHandler(index)}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            />
          })
        ) : null}
        
         
        <button
          type="button"
          className="btn btn-warning button-margin"
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
      </div>
    );
  }
}

export default App;
