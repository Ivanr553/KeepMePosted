import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
        subject: null,
        year: null,
        season: null,
        crn: null,
        phone: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  //Event handler to manage the input text
  handleChange(event) {

    //Assigning variables
    let name = event.target.name
    let value = event.target.value

    //Changing the state to match input data
    this.setState(
      {
          [name]: value
      }
    )
  }

  handleButtonClick(event) {

    event.preventDefault()

    let stateRequest = {
      subject: this.state.subject,
      year: this.state.year,
      season: this.state.season,
      crn: this.state.crn,
      phone: this.state.phone
    }

    fetch('/request', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        request: stateRequest
      })
    })
      .then(function(data) {
        if(data.statusText === 'OK') {
          window.open('http://localhost:8000', '_self')
        }
      })
  }

  render() {
    return (
      <form className="InputForm">
        <input className="main-input" placeholder='subject' type='string' name='subject' onChange={this.handleChange} />
        <input className="main-input" placeholder='year' type='number' name='year' onChange={this.handleChange} />
        <input className="main-input" placeholder='season' type='string' name='season' onChange={this.handleChange} />
        <input className="main-input" key='crn' placeholder='crn' type='crn' name='crn' onChange={this.handleChange} />
        <input className="main-input" key='phoneInput' placeholder='phone' type='number' name='phone' onChange={this.handleChange} />
        <button className="main-submit" key='mainButton' onClick={(e) => this.handleButtonClick(e)} >Submit</button>
      </form>
    )
  }
}

export default InputForm;
