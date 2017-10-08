import React, { Component } from 'react';

class InputForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
        subject: 'AB',
        year: 2018,
        season: 'Spring',
        crn: '',
        phone: ''
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

        <select className="main-select" name='subject' onChange={this.handleChange} value={this.state.subject}>
            <option value="AB">AB Automotive Body Repair&amp;Paint
            </option><option value="AC">AC AirConditioning&amp;Refrigeration
            </option><option value="ACCT">ACCT Accounting
            </option><option value="ACS">ACS Automation &amp; Control Systems
            </option><option value="ACT">ACT Assistive Computer Technology
            </option><option value="ADS">ADS Addictive Disorders Studies
            </option><option value="AES">AES American Ethnic Studies
            </option><option value="AG">AG Agriculture
            </option><option value="ANAT">ANAT Anatomy
            </option><option value="ANPH">ANPH Anatomy/Physiology
            </option><option value="ANSC">ANSC Animal Science
            </option><option value="ANTH">ANTH Anthropology
            </option><option value="ARCH">ARCH Architecture
            </option><option value="ART">ART Art
            </option><option value="ARTH">ARTH Art History
            </option><option value="ASL">ASL American Sign Language
            </option><option value="AST">AST Astronomy
            </option><option value="AT">AT Automotive Technology
            </option><option value="ATET">ATET Applied Tech Technology
            </option><option value="AUTO">AUTO Automotive
            </option><option value="BIOL">BIOL Biology
            </option><option value="BIOT">BIOT Biotechnology
            </option><option value="BOT">BOT Botany
            </option><option value="BUS">BUS Business
            </option><option value="CAOT">CAOT Computer Apps/Office Tech
            </option><option value="CD">CD Child Development
            </option><option value="CDL">CDL Cognitively Diverse Learner
            </option><option value="CHEM">CHEM Chemistry
            </option><option value="CHIN">CHIN Chinese
            </option><option value="CHST">CHST Chicano Studies
            </option><option value="CIS">CIS Computer Information Systems
            </option><option value="CJ">CJ Criminal Justice
            </option><option value="CNIT">CNIT Computer Networking/IT
            </option><option value="CNSE">CNSE Computer Netwrk Sys. Engr. Prg
            </option><option value="COL">COL College
            </option><option value="COMM">COMM Communication Studies
            </option><option value="COT">COT Cooperative Work Experience
            </option><option value="COUN">COUN Counseling
            </option><option value="CRM">CRM Culinary Arts &amp; Restaurant Mgt
            </option><option value="CS">CS Computer Science
            </option><option value="CT">CT Construction Technology
            </option><option value="DA">DA Dental Assistant
            </option><option value="DANC">DANC Dance
            </option><option value="DH">DH Dental Hygiene
            </option><option value="DM">DM Diesel Mechanics
            </option><option value="DMS">DMS Digital Media Studies
            </option><option value="DRFT">DRFT Drafting
            </option><option value="EAC">EAC Educational Assistance Center
            </option><option value="EATM">EATM Exotic Animal Training Mgmt
            </option><option value="ECE">ECE Early Childhood Education
            </option><option value="ECON">ECON Economics
            </option><option value="EDU">EDU Education
            </option><option value="EMT">EMT Emergency Medical Technology
            </option><option value="ENGL">ENGL English
            </option><option value="ENGM">ENGM English for Multilingual Stdts
            </option><option value="ENGR">ENGR Engineering
            </option><option value="ENSC">ENSC Environmental Science
            </option><option value="ESL">ESL Engl as a second language
            </option><option value="ESRM">ESRM Environmtl Sci &amp; Resource Mgt
            </option><option value="FILM">FILM Film Studies
            </option><option value="FREN">FREN French
            </option><option value="FT">FT Fire Technology
            </option><option value="FTVE">FTVE Film, Television, &amp; Elec Media
            </option><option value="FTVM">FTVM Film, Television, Media
            </option><option value="GAME">GAME Game Design
            </option><option value="GEOG">GEOG Geography
            </option><option value="GEOL">GEOL Geology
            </option><option value="GERM">GERM German
            </option><option value="GIS">GIS Geographic Information Systems
            </option><option value="GR">GR Graphics
            </option><option value="HED">HED Health Education
            </option><option value="HIST">HIST History
            </option><option value="HM">HM Hospitality Management
            </option><option value="HMSV">HMSV Human Services
            </option><option value="HS">HS Health Sciences
            </option><option value="HUM">HUM Humanities
            </option><option value="ICA">ICA Intercollegiate Athletics
            </option><option value="ITAL">ITAL Italian
            </option><option value="JAPN">JAPN Japanese
            </option><option value="JOUR">JOUR Journalism
            </option><option value="KIN">KIN Kinesiology
            </option><option value="LIB">LIB Library Instruction
            </option><option value="LS">LS Learning Skills
            </option><option value="MATH">MATH Mathematics
            </option><option value="MICR">MICR Microbiology
            </option><option value="MM">MM Multimedia
            </option><option value="MST">MST Marine Studies
            </option><option value="MT">MT Manufacturing Technology
            </option><option value="MUS">MUS Music
            </option><option value="NS">NS Nursing Science
            </option><option value="NTS">NTS Nutritional Science
            </option><option value="OPTI">OPTI Optical Technology
            </option><option value="PE">PE Physical Education
            </option><option value="PG">PG Personal Growth
            </option><option value="PHIL">PHIL Philosophy
            </option><option value="PHOT">PHOT Photography
            </option><option value="PHSC">PHSC Physical Science
            </option><option value="PHSO">PHSO Physiology
            </option><option value="PHTC">PHTC Commercial Photography
            </option><option value="PHYS">PHYS Physics
            </option><option value="PLS">PLS Paralegal Studies
            </option><option value="PM">PM Paramedic
            </option><option value="POLS">POLS Political Science
            </option><option value="PSY">PSY Psychology
            </option><option value="RADT">RADT Radiologic Technology
            </option><option value="SL">SL Sign Language
            </option><option value="SOC">SOC Sociology
            </option><option value="SPAN">SPAN Spanish
            </option><option value="SS">SS Study Skills
            </option><option value="THA">THA Theatre Arts
            </option><option value="THTR">THTR Theatre
            </option><option value="TTHA">TTHA Technical Theatre
            </option><option value="WEL">WEL Welding
            </option><option value="WS">WS Water Science
            </option><option value="ZOO">ZOO Zoology
            </option>
        </select >

        <select className='main-select' name='year' onChange={this.handleChange} value={this.state.year} >
          <option> 2018 </option>
          <option> 2017 </option>
        </select>

        <select className='main-select' name='season' onChange={this.handleChange} value={this.state.season} >
          <option> Fall </option>
          <option> Spring </option>
          <option> Summer </option>
        </select>

        <input className="main-input" key='crn' placeholder='crn' type='crn' name='crn' onChange={this.handleChange} />

        <input className="main-input" key='phoneInput' placeholder='phone' type='number' name='phone' onChange={this.handleChange} />

        <button className="main-submit" key='mainButton' onClick={(e) => this.handleButtonClick(e)} >Submit</button>
      </form>
    )
  }
}

export default InputForm;
