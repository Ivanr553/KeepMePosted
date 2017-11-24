import React, { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="About">
        This website is courtesy of Sergei Danielian, Ivan Raffuci and Alex Something.

        Simply fill out the form and you will get a text notifiying you that you have been added to the system. When someone
        drops from a class or waitlist, you will be notified.
      </div>
    )
  }

}

export default About
