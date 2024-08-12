import React, { Component } from 'react';
import CountContainer from './containers/Count'
// 自己创建的redux核心对象store
import store from './redux/store' 

export default class App extends Component {

  render() {
    
    return (
      <CountContainer store={store}/>
    )
  }
}