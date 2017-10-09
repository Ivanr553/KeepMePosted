import React, { Component } from 'react';

import SubjectSelect from './SubjectSelect'
import YearSelect from './YearSelect'
import SeasonSelect from './SeasonSelect'
import CrnInput from './CrnInput'
import PhoneInput from './PhoneInput'

class InputForm extends Component {

  constructor(props) {
    super(props)

    //Initiation of state
    this.state = {
        subject: 'AB',
        year: 2018,
        season: 'Spring',
        crn: null,
        phone: null
    }

    //Binding this to handlers
    this.onStateChange = this.onStateChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  //Event handler to manage changing data
  onStateChange(event) {

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

  //Event handler for form submission
  handleButtonClick(event) {

    //Preventing defualt form submission for button
    event.preventDefault()

    //Forming the correct structure for the database entry
    let stateRequest = {
      subject: this.state.subject,
      year: this.state.year,
      season: this.state.season,
      crn: this.state.crn,
      phone: this.state.phone
    }

    //Sending the information to the database and waiting for a proper response
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

        //Checking to see if request went through
        if(data.statusText === 'OK') {

          //Opoening the sent page to notify user of a successful entry
          window.open('http://localhost:8000/sent', '_self')
        }
      })
  }

  render() {
    // let fillCrn = null
    // let fillPhone = null
    //
    // if(this.state.crn == null || this.state.crn == '') {
    //   fillCrn = <span className='alert-text'>*Please put in a crn number*</span>
    // }
    //
    // if(this.state.phone == null || this.state.phone === '') {
    //   fillPhone = <span className='alert-text'>*Please put in a valid phone number*</span>
    // }

    return (
      <form className="InputForm">

        <SubjectSelect subject={this.state.subject} onStateChange={this.onStateChange} />

        <YearSelect year={this.state.year} onStateChange={this.onStateChange} />

        <SeasonSelect season={this.state.season} onStateChange={this.onStateChange} />

        <CrnInput crn={this.state.crn} onStateChange={this.onStateChange} />

        <PhoneInput phone={this.state.phone} onStateChange={this.onStateChange} />

        <button className="main-submit" onClick={(e) => this.handleButtonClick(e)} >Submit</button>
        {this.state.subject}
        {this.state.year}
        {this.state.season}
        {this.state.crn}
        {this.state.phone}
      </form>
    )
  }
}

export default InputForm;
