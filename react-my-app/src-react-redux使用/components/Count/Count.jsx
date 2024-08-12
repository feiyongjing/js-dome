import React, { Component } from 'react'

// 引入自定义的action对象构建函数
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count/create_count_action'

export default class Count extends Component {

    increment = () => {
        const value = this.selectNumber.value * 1
        // mapDispatchToProps编写方式一进行调用容器组件的函数
        // this.props.dispatch(createIncrementAction(value))

        // mapDispatchToProps编写方式二进行调用容器组件的函数
        this.props.jia(value)
    }

    decrement = () => {
        const value = this.selectNumber.value * 1
        // mapDispatchToProps编写方式一进行调用容器组件的函数
        // this.props.dispatch(createDecrementAction(value))

        // mapDispatchToProps编写方式二进行调用容器组件的函数
        this.props.jian(value)
    }

    incrementIfOdd = () => {
        // store的getState函数获取数据
        if (this.props.count % 2 === 0) {
            return
        }
        const value = this.selectNumber.value * 1
        // mapDispatchToProps编写方式一进行调用容器组件的函数
        // this.props.dispatch(createIncrementAction(value))

        // mapDispatchToProps编写方式二进行调用容器组件的函数
        this.props.jia(value)
    }

    incrementAsync = () => {
        const value = this.selectNumber.value * 1
        // mapDispatchToProps编写方式一进行调用容器组件的函数
        // this.props.dispatch(createIncrementAsyncAction(value, 1000))

        // mapDispatchToProps编写方式二进行调用容器组件的函数
        this.props.jiaAsync(value, 1000)
    }

    render() {
        return (
            <div>
                <h1>当前值是{this.props.count}</h1>
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
