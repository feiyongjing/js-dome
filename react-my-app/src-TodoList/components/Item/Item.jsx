import React, { Component } from 'react'
import "./Item.css"

export default class Item extends Component {


    state = { mouse: false }

    // 鼠标事件
    hendlerMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 用户输入事件
    hendlerChange = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 用户删除事件
    hendlerDelete = (id) => {
        return (event) => {
            this.props.deleteTodo(id)
        }
    }

    render() {

        const { id, title, done} = this.props
        const mouse = this.state.mouse

        return (
            
            <li key={id} style={{ backgroundColor: mouse ? "#ddd" : "white" }}
                onMouseEnter={this.hendlerMouse(true)}    // 鼠标进入事件绑定
                onMouseLeave={this.hendlerMouse(false)}   // 鼠标离开事件绑定
            >
                <div className="item-container">
                    <div className="left-content">
                        <input type="checkbox" checked={done} onChange={this.hendlerChange(id)}/>
                        <span>{title}</span>
                    </div>

                    <div className="right-content">
                        {/* <button className="btnEdit" style={{ display: mouse ? "block" : "none" }}>编辑</button> */}
                        <button className="btnDanger" style={{ display: mouse ? "block" : "none" }} onClick={this.hendlerDelete(id)}>删除</button>
                    </div>
                </div>
            </li>
        )
    }
}
