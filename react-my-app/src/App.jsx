import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'


export default class App extends Component {


  // 列表数据
  state = {
    todoObjs: [
      { id: "1", title: "123", done: true },
      { id: "2", title: "222", done: true },
      { id: "3", title: "333", done: false },
    ],
  }

  // 列表添加元素
  addTodo = (todoObj) => {
    const todoObjs = [todoObj, ...this.state.todoObjs]
    this.setState({ todoObjs })
  }

  // 列表修改元素
  updateTodo = (id, done) => {
    const todoObjs = this.state.todoObjs
    const newTodoObjs = todoObjs.map((todoObj) => {
      if (id === todoObj.id) todoObj.done = done
      return todoObj
    })

    this.setState({ todoObjs: newTodoObjs })
  }

  // 列表删除元素
  deleteTodo = (id) => {
    const todoObjs = this.state.todoObjs
    const newTodoObjs = todoObjs.filter((todoObj) => {
      return id !== todoObj.id
    })
    this.setState({ todoObjs: newTodoObjs })
  }

  render() {
    return (
      <div id="app">
        <Header addTodo={this.addTodo} />
        <List todoObjs={this.state.todoObjs} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer />
      </div>

    )
  }
}


