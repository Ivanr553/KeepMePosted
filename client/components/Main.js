import React, { Component } from 'react';

import Title from './Title.js'
import InputForm from './InputForm.js'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Title />
        <InputForm />
      </div>
    )
  }
}

export default Main;
