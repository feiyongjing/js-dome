import React, { Component } from 'react'
import footer from "./Footer.module.css";

export default class Footer extends Component {

    hendlerCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    hendlerClearAll = () => {
        this.props.clearAllTodo()
    }


    render() {
        const todoObjs = this.props.todoObjs

        const total = todoObjs.reduce((pre, todoObj) => pre + (todoObj.done ? 1 : 0), 0)

        return (
            <div className={footer.box}>
                <div className={footer.item_container}>
                    <div className={footer.left_content} >
                        <span>
                            <input type="checkbox" onChange={this.hendlerCheckAll} checked={total === todoObjs.length} />全选 以完成{total}/全部{todoObjs.length}
                        </span>
                    </div>

                    <div >
                        <button className={footer.btn_danger} onClick={this.hendlerClearAll}>清除已完成任务</button>
                    </div>
                </div>
            </div>
        )
    }
}
