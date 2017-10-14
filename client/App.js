import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './styles/styles.css'

import Main from './components/routes/Main.js'
import Sent from './components/routes/Sent.js'
import NotSent from './components/routes/NotSent.js'
import About from './components/routes/About.js'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path="/sent" exact component={Sent} />
          <Route path="/error" exact component={NotSent} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
      <div className="mailbox-png"></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
