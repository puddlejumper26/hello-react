import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    console.log(personObj);
    this.props.addPerson(personObj);
  };

  render() {
    return (
      <div>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="name"
        />
        <input ref={(c) => (this.ageNode = c)} type="text" placeholder="age" />
        <button onClick={this.addPerson}>Add</button>
        <ul>
          {this.props.yiduiren.map((p) => {
            return (
              <li key={p.id}>
                {p.name} -- {p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ yiduiren: state.rens }), {
  addPerson: createAddPersonAction,
})(Person);
