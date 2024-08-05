import React, { Component } from 'react'
import "./Header.css";

export default class Header extends Component {

    // 键盘事件
    hendlerKeydown = (event) => {
        if (event.keyCode === 13) {
            const title = event.target.value
            // 校验输入的数据
            if (!title.trim()) return alert("输入不能为空")
            // 组建数据
            const todoObj = { id: Date.now(), title, done: false }
            // 向app组件传递数据
            this.props.addTodo(todoObj)

            // 清空输入
            event.target.value = ""
        }
    }

    render() {
        return (
            <div className="todo-top">
                <input type="text" placeholder="请输入你的任务名称，按回车键进行添加任务" onKeyDown={this.hendlerKeydown} />
            </div>
        )
    }
}
