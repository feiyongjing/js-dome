import {INCREMENT, DECREMENT} from '../actions/create_count_action' // 引入自定义的action操作常量

/**
 * reducer 进行实际的数据修改
 * @param {*} oldState 表示之前的state数据，如果是第一次或者不传递就是undefined，会使用默认参数
 * @param {*} action 动作对象，内部有type和data表示需要进行的操作类型和传递的数据
 * @returns 新的state数据
 */
const initState = 0 // 初始化的数据
export default function count_reducer(oldState=initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return oldState + data
        case DECREMENT:
            return oldState - data
        default:
            return oldState
    }

}