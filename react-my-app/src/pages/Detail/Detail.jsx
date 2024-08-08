import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {

    render() {

        console.log(this.props)

        // 路由组件可以在 props中match下的params获取路径参数
        // const { id, title, content} = this.props.match.params

        // 路由组件可以在 props中location获取query参数
        // const { search } = this.props.location
        // const { id, title, content } = qs.parse(search.slice(1))

        // 路由组件可以在 props中location下的state获取body参数
        const { id, title, content } = this.props.location.state 

        return (
            <ul>
                <li >ID号：{id}</li>
                <li >消息标题：{title}</li>
                <li >消息详情：{content}  </li>
            </ul>
        )
    }
}
