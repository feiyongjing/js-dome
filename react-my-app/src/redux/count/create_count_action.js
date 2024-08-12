import store from '../store' 

// 定义不同的action操作常量
export const INCREMENT="increment"
export const DECREMENT="decrement"

// 设置不同的action对象构建函数
export const createIncrementAction= data => ({ type: INCREMENT, data})
export const createDecrementAction= data => ({ type: DECREMENT, data})

// 异步Action：Action的值是一个函数，并且在异步Action中一般会调用dispatch函数修改数据，参数是调用同步的Action对象
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}