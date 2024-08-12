
// 定义不同的action操作常量
export const INCREMENT="increment"
export const DECREMENT="decrement"

// 设置不同的action对象构建函数
export const createIncrementAction= data => ({ type: INCREMENT, data})
export const createDecrementAction= data => ({ type: DECREMENT, data})