import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/styles.css'

class Sent extends Component {
  render() {
    return (
      <div className="Sent">
        <h1>Your request has been sent!</h1>
      </div>
    )
  }
}

ReactDOM.render(<Sent />, document.getElementById('sent'))
