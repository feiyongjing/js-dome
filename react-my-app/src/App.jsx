import React from 'react';
import { NavLink, Link, Route, Routes, Navigate, useRoutes } from 'react-router-dom';
import './App.css';

import About from './pages/About/About'
import Home from './pages/Home/Home'

export default function App() {


  const computedClassname = ({ isActive }) => {
    console.log("是否匹配当前路径", isActive)
    return isActive ? "aaa" : "bbb"
  }

  return (
    <div id="app">
      <h2>React Router Demo</h2>

      {/* 原始html中我们使用a标签实现页面的跳转
    <a href="./about.html">About</a>
    <a href="./home.html">Home</a> */}

      {/* 在React中靠 Link组件标签或NavLink 设置路由路径实现切换路由组件，一般是在页面的导航菜单区编写路由链接
        Link组件标签无法设置点击时临时添加设置ClassName切换样式
        NavLink组件标签可以设置className属性是个函数，函数的默认参数是个对象，对象有个isActive属性表示是否匹配当前路径，判断这个来设置点击时的样式切换
        Link和 NavLink的push属性设置当前页面被浏览器记录（默认是push），而replace属性是设置当前页面及其子路由页面不被浏览器记录，
        即跳转到其他页面后无法回退到之前的页面，但是会继续向更早的页面跳转
     */}
      <NavLink className={computedClassname} to="/about">About</NavLink>
      <br />
      <NavLink className={computedClassname} to="/home">Home</NavLink>

      {/* 方式一：手动编写标签完成路由表，即路由路径对应路由组件 */}
      {/* 通过 Routes组件标签 包裹路由注册，确保一个路径路由只有第一个路由组件会展示，后面其他的不展示
        Route组件标签必须被Routes组件标签包裹
    
        通过 Route组件标签 设置路由路径来注册实际的路由组件，一般路由组件都是在页面数据内容的展示区 
        可以通过在 Route组件标签 设置caseSensitive属性设置区分大小写，默认不加是不区分大小写

        通过 Navigate组件标签 设置默认路径选择的路由进行展示路由组件
      */}
      {/* <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        </Routes> */}

      {/* 方式二：通过useRoutes函数传入路由表对象生成路由表 
          注意一般在项目中是将路由表对象放在 src/routes/ 目录之下的文件中，然后引用不同的路由表对象
      */}
      {
        useRoutes(
          [
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/about",
              element: <About />
            },
            {
              path: "/",
              element: <Navigate to="/home" />
            }
          ]
        )
      }

    </div>
  )
}

