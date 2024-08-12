// 引入createStore函数用于创建redux的核心对象store
import {createStore} from 'redux'  

// 引入自定义的reducer，每一个reducer都专为一个组件进行服务（这里是Count组件）
import count_reducer from './count/count_reducer' 

// 使reducer被store对象管理，整个应用只有一个store对象，它管理所有的reducer
const store =createStore(count_reducer)

// 暴露store对象
export default store;