import React, { useState } from 'react';
import { NavLink, useNavigate, useRoutes } from 'react-router-dom';
import './App.css';

import Message from './pages/Message/Message'

export default function App() {

  // 通过 useNavigate 函数返回的 navigate对象来进行编程式的路由导航
  // 使用 useNavigate 就无需再像route5那样对一般组件使用withRouter加工组件成为路由组件
  const navigate = useNavigate()

  const [messageArr, setMessageArr] = useState(
    [
      { id: "001", title: "消息1", content: "消息1内容" },
      { id: "002", title: "消息2", content: "消息2内容" },
      { id: "003", title: "消息3", content: "消息3内容" },
    ]
  )


  const computedClassname = ({ isActive }) => {
    // console.log("是否匹配当前路径", isActive)
    return isActive ? "aaa" : "bbb"
  }

  // 带历史记录的跳转，如果需要传递params或者query参数就手动拼接到路由路径中
  const pushShow = (id, title, content) => {
    
    navigate(`/message`, {
      replace: false,
      state: {
        id, title, content
      }
    })

  }

  // 不带历史记录的跳转
  const replaceShow = (id, title, content) => {
    console.log(id,title,content)
    navigate(`/message`, {
      replace: true,
      state: {
        id, title, content
      }
    })
  }

  // 通过正负数设置后退多少步跳转
  const goBack = () => {
    navigate(-1)
  }

  // 通过正负数设置前进多少步跳转
  const goForward = () => {
    navigate(1)
  }

  return (
    <div id="app">
      <h2>React Router Demo</h2>

      <ul>
        {
          messageArr.map((message) => {
            const { id, title, content } = message
            return (
              <li key={message.id}>

                {/* 传递具体的path params参数（路径参数）给路由组件 */}
                {/* <NavLink className={computedClassname} to={`/message/${id}/${title}/${content}`}>{title}正常跳转</NavLink> */}

                {/* 传递具体的query params参数给路由组件 */}
                {/* <NavLink className={computedClassname} to={`/message/?id=${id}&title=${title}&content=${content}`}>{title}正常跳转</NavLink> */}

                {/* 传递具体的body params参数给路由组件 */}
                <NavLink className={computedClassname} to={'/message'} state={{ id, title, content }}>{title}正常跳转</NavLink>


                {/* 编程式路由导航，即手动触发事件进行路由导航  */}
                <button onClick={()=> pushShow(id, title, content)} >push模式路由跳转</button>
                <button onClick={()=> replaceShow(id, title, content)} > replace模式路由跳转</button>
              </li>
            )
          })
        }
      </ul >

      {
        useRoutes(
          [
            // 设置path params参数列表（路径参数列表），通过路径参数向路由组件传递参数
            // 路由组件可以通过 useParams函数 直接获取传入路径组件的路径参数
            // {
            //   path: "/message/:id/:title/:content",
            //   element: <Message />
            // }

            // query params参数无需声明接收形参列表，原因是在传递参数给路由组件时已经声明了形参
            // 路由组件可以通过 useSearchParams函数 获取传入路径组件的query参数
            // {
            //   path: "/message",
            //   element: <Message />
            // }

            // body params参数也无需声明接收形参列表，原因是在传递参数给路由组件时已经声明了形参 
            // 路由组件可以在 useLocation()函数返回的location对象下的state属性获取body参数 
            {
              path: "/message",
              element: <Message />
            }

          ]
        )
      }

      {/* 路由的回退与前进，注意当前组件必须是路由组件  */}
      <button onClick={goBack} >后退</button>
      <button onClick={goForward} >前进</button>

    </div>
  )
}

