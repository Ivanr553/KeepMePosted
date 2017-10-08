import React, { Component } from 'react';

class Sent extends Component {

onButtonClick() {
  window.open('/', '_self')
}

  render() {
    return (
      <div className="Sent">
        <button className='button-sent' onClick={this.onButtonClick}>Your request has been sent!</button>
      </div>
    )
  }
}

export default Sent;
