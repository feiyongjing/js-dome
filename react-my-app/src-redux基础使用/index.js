import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store' // 自己创建的redux核心对象store

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 监听redux下store中的数据方式二
// 由于每个组件都设置componentDidMount生命周期手动订阅redux下store中的数据修改并且设置回调重新进行渲染页面比较麻烦
// 所以直接在App组件上进行监听redux下store中的数据并且重新渲染App组件，这样会同时渲染App下的所有组件
// 至于渲染App和下面的所有组件的效率问题则是交给React的Diff算法来决定局部刷新
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})


reportWebVitals();
