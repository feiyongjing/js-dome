import React, { Component } from 'react';
<<<<<<< HEAD
import Count from './components/Count/Count'
=======
import CountContainer from './containers/Count'
// 自己创建的redux核心对象store
import store from './redux/store' 
>>>>>>> d25147137388bd66e4c5dc65a36688e461b30f41

export default class App extends Component {

  render() {
    
    return (
<<<<<<< HEAD
      <Count />
=======
      <CountContainer store={store}/>
>>>>>>> d25147137388bd66e4c5dc65a36688e461b30f41
    )
  }
}