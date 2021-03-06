import React, { Component } from 'react'

class YearSelect extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onStateChange(e)
  }

  render() {
    return (
      <select className='main-select' name='year' onChange={this.handleChange} value={this.props.year} >
        <option> 2019 </option>
        <option> 2020 </option>
      </select>
    )
  }

}

export default YearSelect
