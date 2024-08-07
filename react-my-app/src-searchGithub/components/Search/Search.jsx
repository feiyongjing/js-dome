import React, { Component } from 'react'
import axios from 'axios'
import "./Search.css";

export default class Search extends Component {

    // 搜索
    search = () => {
        const keyWord = this.keyWordElement.value

        this.props.updateAppState({ isFirst: false, isLoading: true })
        axios({
            url: `https://api.github.com/search/users`,
            method: "GET",
            params: {
                q: keyWord,
            },
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            data: {},
        }).then(
            (response) => {
                console.log("请求响应状态码", response.status);
                console.log("请求响应全部header头信息", response.headers);
                console.log("请求响应体信息", response.data.items);

                // 请求加载成功
                const users = response.data.items
                this.props.updateAppState({isLoading: false, users })

            },
            (error) => {
                // 请求加载失败
                console.log("请求失败了", error.message);
                this.props.updateAppState({isLoading: false, errMsg: error.message })
            }
        );
    }

    render() {
        return (
            <div className="search">
                <h3>Search Github Users</h3>
                <div className="searchInput">
                    <input
                        ref={current => this.keyWordElement = current}
                        type="text"
                        placeholder="输入名称进行搜索"
                    />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }
}
