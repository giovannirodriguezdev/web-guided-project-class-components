import React, { useState } from "react";
import Item from "./Item";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ [e.target.name]: e.target.value});
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({item: ''});
    this.props.addItem(e, this.state.item);
  }

  // class property to submit form

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.submitItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input 
          type="text"
          value={this.state.item} 
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
