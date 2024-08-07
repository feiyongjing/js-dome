import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import About from './pages/About/About'
import Home from './pages/Home/Home'


export default class App extends Component {

  render() {
    return (
      <div id="app">
        <h2>React Router Demo</h2>

        {/* 原始html中我们使用a标签实现页面的跳转
        <a href="./about.html">About</a>
        <a href="./home.html">Home</a> */}

        {/* 在React中靠 Link组件标签 设置路由路径实现切换路由组件，一般是在页面的导航菜单区编写路由链接 */}
        <Link to="/about">About</Link>
        <br />
        <Link to="/home">Home</Link>

        {/* 通过 Route组件标签 设置路由路径来注册实际的路由组件，一般路由组件都是在页面数据内容的展示区 */}
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </div>

    )
  }
}


