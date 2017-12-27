import React, { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="About">

      <body>
      <p>This service solely allievates the need to refresh the schedule of classes website every 10 minutes to check whether
      someone had dropped a much needed class. Simply fill out the form and you will get a text notifiying you that you have been added to the system. When someone
      drops from a class or waitlist, you will be notified.</p>

      <p><strong><u>Please Note:</u></strong> When you have been notified about a class but did not manage to sign up for it in time, you will
      have to re-add that class into our system again if you would like a future notification about that class.</p>

      <p>Once someone signs up for the same class as someone else, neither student will receive a message before the other based
      on the time when they signed up. Once the system detects an open seat, it messages everyone who had signed up for that
      crn course simultaneously. Our website checks for open seats once every few minutes, and not every second.</p>

      <p>We are not liable for any phone numbers that signed up and did not receive a text message when a class seat opened up.</p>



      <div id="footer">
      <p>This website is courtesy of Sergei Danielian.</p>

      <p>Questions? Concerns?<br/>
      Contact us at kmpsupp@gmail.com</p>

      <p>Developers & Co: Sergei Danielian, Ivan Raffucci, and Alex Littua.</p>
      </div>


      </body>

      </div>
    )
  }

}

export default About
