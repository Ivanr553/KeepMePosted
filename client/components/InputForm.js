import React, { Component } from 'react';

class InputForm extends Component {
  render() {
    return (
      <form className="InputForm">
        <input className="main-input" defaultValue="class" />
        <input className="main-input" defaultValue="term" />
        <input className="main-input" defaultValue="phone" />
        <button className="main-submit">Submit</button>
      </form>
    )
  }
}

export default InputForm;
