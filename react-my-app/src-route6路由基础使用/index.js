import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';  // BrowserRouter 和 HashRouter 都是路由器

const root = ReactDOM.createRoot(document.getElementById('root'));

// 必须确保所有的路由组件都被同一个路由器管理，否则路由链接不生效，所以只能使用一个路由器标签包裹App组件来管理所有的路由
// BrowserRouter 和 HashRouter 路由器的区别
// HashRouter路由器会在域名后的路径添加/#/ 会将/#/后面的路径当成路由路径去获取前端资源
// BrowserRouter路由器不会在域名后的路径添加/#/ 注意路由的路径页面刷新后直接拿着这个路径去获取后端资源而不是前端资源导致报错
// BrowserRouter路由器的解决方案是通过nginx配置路由转发来区分前端路由和后端路由进行代理转发
// 一般如果前后端API都是同一个域名是使用的 BrowserRouter 路由器
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();