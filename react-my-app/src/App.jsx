import React, { Component } from 'react';
import './App.css';

import Count from './components/Count/Count'



export default class App extends Component {

  render() {
    return (
      <div id='app'>
        <Count />
      </div>
    )
  }
}