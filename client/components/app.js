import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/styles.css'

import Title from './Title.js'
import InputForm from './InputForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Title />
       <InputForm />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
