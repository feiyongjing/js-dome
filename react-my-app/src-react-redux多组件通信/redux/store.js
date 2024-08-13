// 引入createStore函数用于创建redux的核心对象store
// applyMiddleware函数是开启中间件，具体开启什么中间件就看参数了，这里是开启 thunk 异步中间件
// combineReducers函数是用于合并汇总所有的reducer
import { createStore, applyMiddleware, combineReducers } from 'redux'

// 引入自定义的reducer，每一个reducer都专为一个组件进行服务
import count_reducer from './reducers/count_reducer'
import person_reducer from './reducers/person_reducer'

// 引入thunk异步中间件
import {thunk} from 'redux-thunk'

// 合并汇总所有的reducer
// 注意后面通过 getState函数 获取的state是所有组件的数据，如果需要获取特点组件的数据还需要通过当前 reducer 的key来获取
const allReducer=combineReducers({
    count: count_reducer,
    personObjs: person_reducer
})

// 使reducer被store对象管理，整个应用只有一个store对象，它管理所有的reducer
const store = createStore(allReducer, applyMiddleware(thunk))

// 暴露store对象
export default store;