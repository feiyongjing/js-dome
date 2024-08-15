import React, { Component } from 'react';
import { NavLink, Link, Route, Switch,Redirect } from 'react-router-dom';
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

        {/* 在React中靠 Link组件标签或NavLink 设置路由路径实现切换路由组件，一般是在页面的导航菜单区编写路由链接
            Link组件标签无法设置点击时临时添加设置ClassName切换样式
            NavLink组件标签默认在点击时会添加一个叫active的class，但是也可以手动设置activeClassName来设置添加点击时的ClassName切换样式
         */}
        <NavLink activeClassName="aaa" className="bbb" to="/about">About</NavLink>
        <br />
        <NavLink activeClassName="aaa" className="bbb" to="/home/a/b">Home</NavLink>

        {/* 通过 Route组件标签 设置路由路径来注册实际的路由组件，一般路由组件都是在页面数据内容的展示区 

            通过 Switch组件标签 包裹路由注册，确保一个路由路由只有第一个路由组件会展示，后面其他的不展示
            如果不包裹Switch组件标签，就会一个路由路由展示多个路由组件，这样会有效率问题

            通过 Redirect组件标签 设置当所有的路由都不匹配时默认选择路由进行展示路由组件

            默认Route中的path属性进行路由注册时是模糊匹配，即NavLink中的to属性值只要匹配Route中的path属性值前缀就可以展示该路由组件
            而通过设置Route中的exact属性表示开启严格匹配，必须要保证NavLink中的to属性值完整匹配Route中的path属性值才能展示该路由组件
            需要注意的是严格匹配不要随便开启，因为有时开启严格匹配会导致无法匹配多级路由
        */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Redirect to="/home"></Redirect>
          {/* <Route path="/home" component={Test} /> */}
          {/* <Route exact path="/home" component={Home} /> */}
        </Switch>

      </div>

    )
  }
}