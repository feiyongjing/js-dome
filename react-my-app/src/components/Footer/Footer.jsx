import React, { Component } from 'react'
import footer from "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="box" v-if="total">
                <span className="statistics">
                    <input type="checkbox"/>全选 以完成/全部
                </span>
                <button className={footer.btn_danger} >清除已完成任务</button>
            </div>
        )
    }
}
