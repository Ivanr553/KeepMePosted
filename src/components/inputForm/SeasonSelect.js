import React, { Component } from 'react'

class SeasonSelect extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onStateChange(e)
  }

  render() {
    return (
      <select className='main-select' name='season' onChange={this.handleChange} value={this.props.season} >
        <option> Fall </option>
        <option> Spring </option>
        <option> Summer </option>
      </select>
    )
  }
}

export default SeasonSelect
