import React, { Component } from 'react'
import "./List.css";

export default class List extends Component {

    render() {
        const {users,isFirst, isLoading, errMsg} = this.props.stateObj

        return (
            <div className="row">
                {
                    isFirst? <h1 >欢迎使用！</h1> :
                    isLoading? <h1 >加载中....</h1>:
                    errMsg? <h1 style={{color:"red"}}>{errMsg}</h1> :
                    users.map(user => {
                        return (
                            <div className="card" key={user.id} >
                                <a href={user.html_url}
                                    target="_blank">
                                    <img alt="头像不存在"
                                        src={user.avatar_url}
                                        style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
                {/* https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
            </div>
        )
    }
}
