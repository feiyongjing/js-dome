import {ADD_PERSON} from '../actions/create_person_action' // 引入自定义的action操作常量

/**
 * reducer 进行实际的数据修改
 * @param {*} oldState 表示之前的state数据，如果是第一次或者不传递就是undefined，会使用默认参数
 * @param {*} action 动作对象，内部有type和data表示需要进行的操作类型和传递的数据
 * @returns 新的state数据
 */
const initState = [{id: "001", name:"张三", age:19}] // 初始化的数据
export default function person_reducer(oldState=initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            // oldState.unshift(data) 此次不能这样写，原因是必须返回一个新的对象（新地址），才会真正的修改state的数据
            // 主要原因是 reducer 函数必须保证是一个纯函数，纯函数不允许修改传入的参数
            return [data, ...oldState]
        default:
            return oldState
    }

}