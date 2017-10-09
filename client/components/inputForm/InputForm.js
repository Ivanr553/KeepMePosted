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
    async function postRequest() {
      const response = await fetch('/request', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request: stateRequest
        })
      })

      let data = await response.json()

      if(data.message === 'OK') {

            // Opening the 'sent' page to notify user of a successful entry
            window.open('http://localhost:8000/sent', '_self')
      } else {

        console.log('oops! something broke!')
      }
    }

    postRequest()
  }

  render() {
    let fillCrn = null
    let fillPhone = null

    if(this.state.crn == null || this.state.crn == '') {
      fillCrn = <span className='alert-text'>*Please put in a crn number*</span>
    }

    if(this.state.phone == null || this.state.phone === '') {
      fillPhone = <span className='alert-text'>*Please put in a valid phone number*</span>
    }

    return (
      <form className="InputForm">

        <SubjectSelect subject={this.state.subject} onStateChange={this.onStateChange} />

        <YearSelect year={this.state.year} onStateChange={this.onStateChange} />

        <SeasonSelect season={this.state.season} onStateChange={this.onStateChange} />

        <div className="container">
        {fillCrn}
        <CrnInput crn={this.state.crn} onStateChange={this.onStateChange} />
        </div>

        <div className="container">
        {fillPhone}
        <PhoneInput phone={this.state.phone} onStateChange={this.onStateChange} />
        </div>

        <button className="main-submit" onClick={(e) => this.handleButtonClick(e)} >Submit</button>
      </form>
    )
  }
}

export default InputForm;
