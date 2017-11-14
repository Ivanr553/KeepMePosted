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
        year: '2018',
        season: 'Fall',
        crn: '',
        phone: '',
        showAlertText: false
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
    event.preventDefault()

    let that = this

    if(this.state.crn === '' || this.state.phone === '' || this.state.crn.length < 5 || this.state.phone < 10) {
      return that.setState({showAlertText: true})
    }

    //Forming the correct structure for the database entry
    let newEntry = {
      newClassID: this.state.subject + '.' + this.state.year + '.' + this.state.season + '.' + this.state.crn + '.',
      phone: String(this.state.phone)
    }

    //Sending the information to the database and waiting for a proper response
    async function postRequest() {

      console.log(newEntry)

      //Constructing request to back end
      const response = await fetch('https://kmp-api.herokuapp.com/entry', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newEntry
        })
      })

      let message = await response.json()

      console.log(message)

      //Checking the response from the back end
      if(message.responseStatus == 'OK') {

        // Opening the 'sent' page to notify user of a successful entry
        window.open( window.location.href + 'sent', '_self')
      } else {

        //Showing user error with input
        that.setState({showAlertText: true})
      }
    }

    postRequest()
  }

  render() {

    //Assigning null values for conditional text
    let fillCrn = <div className="alert-text hidden"> hidden</div>
    let fillPhone = <div className="alert-text hidden"> hidden </div>
    let invalidForm = <div className="alert-text hidden"> hidden </div>

    //Checking state for alert text display

    //Alert text for incomplete crn length
    if(this.state.crn != '' && this.state.crn.length < 5 && this.state.showAlertText) {
      fillCrn = <span className='alert-text'>*Please put in a valid crn number*</span>
    }

    //Alert text for incomplete/missing crn after attempted submission
    if(this.state.crn == '' && this.state.showAlertText) {
      fillCrn = <span className='alert-text'>*Please put in a crn number*</span>
    }

    //Alert text for incomplete phone length
    if(this.state.phone != '' && this.state.phone.length < 10 && this.state.showAlertText) {
      fillPhone = <span className='alert-text'>*Please put in a valid phone number*</span>
    }

    //Alert text for incomplete/missing phone nmber after attempted submission
    if(this.state.phone === '' && this.state.showAlertText) {
      fillPhone = <span className='alert-text'>*Please put in a valid phone number*</span>
    }

    //Alert text for incomplete form submission
    if(((this.state.phone === '') || (this.state.crn == '')) && this.state.showAlertText) {
      invalidForm = <span className='alert-text'>*Fill in all form fields*</span>
    }

    return (
      <div className="container form-container">
        <form className="InputForm">

          <div className="container container-left">

            <div className="container">
              {invalidForm}
              <div className="container margin-top">
                <div className="form-titles">Select a subject</div>
                <SubjectSelect subject={this.state.subject} onStateChange={this.onStateChange} />
              </div>
            </div>

            <div className="container margin-top">
            <div className="form-titles">Select a year</div>
            <YearSelect year={this.state.year} onStateChange={this.onStateChange} />
            </div>

            <div className="container margin-top">
            <div className="form-titles">Select a term</div>
            <SeasonSelect season={this.state.season} onStateChange={this.onStateChange} />
            </div>

          </div>

          <div className="container container-right">

            <div className="container">
              {fillCrn}
              <div className="container margin-top">
              <div className="form-titles">Input the CRN number for the class</div>
              <CrnInput crn={this.state.crn} onStateChange={this.onStateChange} />
              </div>
            </div>

            <div className="container">
              {fillPhone}
              <div className="container margin-top">
              <div className="form-titles">A number to reach you at</div>
              <PhoneInput phone={this.state.phone} onStateChange={this.onStateChange} />
              </div>
            </div>

          </div>

        </form>

        <button className="main-submit" onClick={(e) => this.handleButtonClick(e)} >Submit</button>
      </div>
    )
  }
}

export default InputForm;
