// 引入createStore函数用于创建redux的核心对象store
// combineReducers函数是用于合并汇总所有的reducer
import { createStore, combineReducers } from 'redux'

// 引入自定义的reducer，每一个reducer都专为一个组件进行服务（这里是Count组件）
import count_reducer from './count/count_reducer' 

// 合并汇总所有的reducer
// 注意后面通过 getState函数 获取的state是所有组件的数据，如果需要获取特点组件的数据还需要通过当前 reducer 的key来获取
const allReducer=combineReducers({
    count: count_reducer
})

// 使reducer被store对象管理，整个应用只有一个store对象，它管理所有的reducer
const store =createStore(allReducer)

// 暴露store对象
export default store;