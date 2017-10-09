import React, { Component } from 'react'

class PhoneInput extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onStateChange(e)
  }

  render() {
    return (
      <div className='container'>
      <input className="main-input" placeholder='phone' type='tel' name='phone' maxLength="10" onChange={this.handleChange} />
      </div>
    )
  }

}

export default PhoneInput
