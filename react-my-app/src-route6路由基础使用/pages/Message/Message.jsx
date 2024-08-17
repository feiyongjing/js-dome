import React from 'react'
import { useParams, useSearchParams,useLocation,useNavigationType} from 'react-router-dom';

export default function Message() {

    // 路由组件可以通过 useParams函数 直接获取传入路径组件的路径参数
    // const { id, title, content } = useParams()

    // 路由组件可以通过 useSearchParams函数 获取传入路径组件的query参数
    // 注意调用 useSearchParams函数 返回的是一个两元素的数组，第一个元素是query参数，第二个参数是修改query的函数
    // query参数中的元素必须通过get方法手动获取
    // const [query, setQuery] = useSearchParams()
    // const id =query.get("id")
    // const title =query.get("title")
    // const content =query.get("content")

    // 路由组件可以在 useLocation()函数返回的location对象下的state属性获取body参数
    const { id, title, content } = useLocation().state

    // POP是浏览器直接打开，push和replace表示记录和不记录的路由跳转
    console.log("当前路由组件是如何打开的：",useNavigationType())

    return (
        <div>
            <ul>
                <li >ID号：{id}</li>
                <li >消息标题：{title}</li>
                <li >消息详情：{content}  </li>
            </ul>
        </div>
    )
}

