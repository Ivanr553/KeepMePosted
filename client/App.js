import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './styles/styles.css'

import Main from './components/routes/Main.js'
import Sent from './components/routes/Sent.js'
import NotSent from './components/routes/NotSent.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter style={{backgroundImage: 'url(this.state.image)'}}>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path="/sent" exact component={Sent} />
          <Route path="/error" exact component={NotSent} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
