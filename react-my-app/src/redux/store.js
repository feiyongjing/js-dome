// 引入createStore函数用于创建redux的核心对象store
<<<<<<< HEAD
import {createStore} from 'redux'  

// 引入自定义的reducer，每一个reducer都专为一个组件进行服务（这里是Count组件）
import count_reducer from './count/count_reducer' 

// 使reducer被store对象管理，整个应用只有一个store对象，它管理所有的reducer
const store =createStore(count_reducer)
=======
// applyMiddleware函数是开启中间件，具体开启什么中间件就看参数了，这里是开启 thunk 异步中间件
import { createStore, applyMiddleware } from 'redux'

// 引入自定义的reducer，每一个reducer都专为一个组件进行服务（这里是Count组件）
import count_reducer from './count/count_reducer'

// 引入thunk异步中间件
import {thunk} from 'redux-thunk'

// 使reducer被store对象管理，整个应用只有一个store对象，它管理所有的reducer
const store = createStore(count_reducer, applyMiddleware(thunk))
>>>>>>> d25147137388bd66e4c5dc65a36688e461b30f41

// 暴露store对象
export default store;