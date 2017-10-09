import React, { Component } from 'react'

class CrnInput extends Component {

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
      <input className="main-input" placeholder='crn' type='tel' maxLength="5" name='crn' onChange={this.handleChange} />
      </div>
    )
  }

}

export default CrnInput
