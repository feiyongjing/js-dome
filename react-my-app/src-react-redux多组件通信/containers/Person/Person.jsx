import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/create_person_action'

class PersonUI extends Component {


    addPerson=()=>{
        const id = this.props.personObjs.length+1
        const name=this.nameNode.value
        const age=this.ageNode.value

        this.props.add({id, name, age})
    }


    render() {
        const {count, personObjs} = this.props

        return (
            <div>
                <h2>Person组件</h2>
                <input ref={c => this.nameNode = c} placeholder='请输入名称' />
                <input ref={c => this.ageNode = c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        personObjs.map((personObj)=>{
                            return <li key={personObj.id}>用户名称：{personObj.name}，用户年龄：{personObj.age}</li>
                        })
                    }
                    
                </ul>

                <h2>Count组件数据展示在Person组件中</h2>
                <h4>当前值是{count}</h4>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        count: state.count,
        personObjs: state.personObjs
    }
}

const mapDispatchToProps = {
    add: createAddPersonAction
}


// 创建一个 Count 容器组件，包裹PersonUI 组件，并且向它传递props数据和函数
export default connect(mapStateToProps, mapDispatchToProps)(PersonUI)
