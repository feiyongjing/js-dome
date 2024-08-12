import React, { Component } from 'react'
// 自己创建的redux核心对象store
import store from '../../redux/store' 

// 引入自定义的action对象构建函数
import {createIncrementAction, createDecrementAction} from '../../redux/count/create_count_action'

export default class Count extends Component {

    // 监听redux下store中的数据方式一
    // 通过store的dispatch只会修改数据，不同像setState修改数据之后自动调用render函数重新渲染页面
    // 所以需要在组件挂载完毕生命周期钩子中订阅redux下store中的数据数据修改，设置修改的回调进行渲染页面
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         // 由于render手动调用不生效
    //         // 所以使用setState但是不传入更新数据，但是会间接的调用render函数重新渲染页面
    //         this.setState({})
    //     })
    // }


    increment = () => {
        const value = this.selectNumber.value * 1
        // store的dispatch函数修改数据，参数是action对象（包含操作类型和传递的数据）
        store.dispatch(createIncrementAction(value))
    }

    decrement = () => {
        const value = this.selectNumber.value * 1
        store.dispatch(createDecrementAction(value))
    }

    incrementIfOdd = () => {
        // store的getState函数获取数据
        if (store.getState() % 2 === 0) {
            return
        }
        const value = this.selectNumber.value * 1
        store.dispatch(createIncrementAction(value))
    }

    incrementAsync = () => {
        const value = this.selectNumber.value * 1
        setTimeout(() => {
            store.dispatch(createIncrementAction(value))
        }, 1000)

    }


    render() {
        return (
            <div>
                <h1>当前值是{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前值是奇数就加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
