import React, { Component } from 'react';

class Title extends Component {

  handleAboutClick() {
    window.open( window.location.href + 'about', '_self')
  }
  handleStatisticsClick() {
    window.open( window.location.href + 'statistics', '_self')
  }


  render() {
    return (
      <div className="Title">
        <div className="title-small"> KeepMe </div> <div className="title-large" > POSTED </div>
        <div className="statistics-link" onClick={this.handleStatisticsClick} >Statistics</div>
        <div className="about-link" onClick={this.handleAboutClick} >About Us</div>
        <div className="tagline"> Stay posted on your waitlisted classes </div>
      </div>
    )
  }
}

export default Title;
