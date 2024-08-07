import React, { Component } from 'react';
import './App.css';

import Search from './components/Search/Search'
import List from './components/List/List'


export default class App extends Component {

  state = {
    users: [],
    // 初始化的欢迎词隐藏
    isFirst: true,
    // 请求前是正在加载中
    isLoading: false,
    // 错误信息
    errMsg: "",
  }

  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }

  render() {
    return (
      <div id="app">
        <Search updateAppState={this.updateAppState} />
        <List stateObj={this.state} />
      </div>

    )
  }
}


