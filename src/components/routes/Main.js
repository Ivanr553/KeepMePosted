import React, { Component } from 'react';

import Title from '../title/Title.js'
import InputForm from '../inputForm/InputForm.js'

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
