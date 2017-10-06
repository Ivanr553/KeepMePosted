import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      class: 'class',
      term: 'term',
      phone: 'phone',
      mainButton: 'mainButton'
    })
  }

  handleButtonClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form className="InputForm">
        <input className="main-input" placeholder={this.state.class} />
        <input className="main-input" placeholder={this.state.term} />
        <input className="main-input" key='phoneInput' placeholder={this.state.phone} />
        <button className="main-submit" key='mainButton' onClick={(e) => this.handleButtonClick(e)} >Submit</button>
      </form>
    )
  }
}

export default InputForm;
