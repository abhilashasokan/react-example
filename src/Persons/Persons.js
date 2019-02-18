import React, {Component} from 'react'

class Persons extends Component {
    render() {
        return (            
            <div className="card PersonsCard">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" key={this.props.index} onClick={this.props.click}>
                        <span className="username">
                            <strong>{this.props.name}</strong>
                        </span> 
                        &nbsp;with age of &nbsp;
                        <span className="username">
                            <strong>{this.props.age}</strong>
                        </span>
                        <input type="text" onChange={this.props.changed} className="form-control changeName" placeholder="Enter new username"></input>
                    </li>
                </ul>                
            </div>
        );
    }
}

export default Persons;