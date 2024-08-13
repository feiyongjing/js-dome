// 定义不同的action操作常量
export const ADD_PERSON="addPerson"

// 设置不同的action对象构建函数
export const createAddPersonAction= personObj => ({ type: ADD_PERSON, data: personObj})