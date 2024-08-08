import React, { Component } from 'react';
import './App.css';

import Message from './component/Message/Message'

export default class App extends Component {

  render() {
    return (
      <div id="app">
        <h2>React Router Demo</h2>
        <Message/>
      </div>
    )
  }
}