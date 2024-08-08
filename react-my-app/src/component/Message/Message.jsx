import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom';
import Detail from '../../pages/Detail/Detail'

export default class Message extends Component {


    state = {
        messageArr: [
            { id: "001", title: "消息1", content: "消息1内容" },
            { id: "002", title: "消息2", content: "消息2内容" },
            { id: "003", title: "消息3", content: "消息3内容" },
        ]
    }

    pushShow = (id, title, content) => {
        this.props.history.push(`/detail`, { id, title, content })
    }

    replaceShow = (id, title, content) => {
        this.props.history.replace(`/detail`, { id, title, content })
    }

    goBock = () => {
        this.props.history.goBock()
    }

    goForward = () => {
        this.props.history.goForward()
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            const { id, title, content } = message
                            return (
                                <li key={message.id}>
                                    {/* 传递具体的path params参数（路径参数）给路由组件 */}
                                    {/* <NavLink to={`/detail/${id}/${title}/${content}`}>{title}</NavLink> */}

                                    {/* 传递具体的query params参数给路由组件 */}
                                    {/* <NavLink to={`/detail/?id=${id}&title=${title}&content=${content}`}>{title}</NavLink> */}

                                    {/* 传递具体的body params参数给路由组件 */}
                                    <NavLink to={{ pathname: '/detail', state: { id, title, content } }}>{title}</NavLink>

                                    {/* 编程式路由导航，即手动触发事件进行路由导航，但是注意当前组件必须是路由组件，否则this.props中没有history */}
                                    {/* <button onClick={() => this.pushShow(id, title, content)} >push跳转</button>
                                    <button onClick={() => this.replaceShow(id, title, content)} > replace跳转</button> */}
                                </li>
                            )
                        })
                    }
                </ul >

                {/* 设置path params参数列表（路径参数列表），通过路径参数向路由组件传递参数
                    路由组件可以在 props中match下的params获取路径参数
                 */}
                {/* <Route path="/detail/:id/:title/:content" component={Detail} /> */}

                {/* query params参数无需声明接收形参列表，原因是在传递参数给路由组件时已经声明了形参
                    路由组件可以在 props中location获取query参数
                 */}
                {/* <Route path="/detail" component={Detail} /> */}

                {/* body params参数也无需声明接收形参列表，原因是在传递参数给路由组件时已经声明了形参 
                    路由组件可以在 props中location下的state获取body参数
                */}
                <Route path="/detail" component={Detail} />


                {/* 路由的回退与前进，注意当前组件必须是路由组件，否则this.props中没有history */}
                {/* <button onClick={this.goBock} >后退</button>
                <button onClick={this.goForward} >前进</button> */}
            </div >
        )
    }
}
