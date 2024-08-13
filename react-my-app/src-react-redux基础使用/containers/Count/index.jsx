// 引入react-redux的connect用于自定义的Count UI组件和redux的连接
import { connect } from 'react-redux'

// 引入自定义的action对象构建函数
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count/create_count_action'

// 引入自定义的Count UI组件
import CountUI from '../../components/Count/Count'

// 参数是父组件（App组件）传递的store对象调用getState()获取redux中的数据
// 返回值作为向UI组件（CountUI）传递的 props 数据
function mapStateToProps(state) {
    return {
        count: state.count
    }
}

// 参数是父组件（App组件）传递的store中的dispatch函数，可以用于修改redux中的数据
// 返回值作为向UI组件（CountUI）传递的 props 函数
// mapDispatchToProps编写方式一：如下编写函数
// function mapDispatchToProps(dispatch) {
//     return {
//         dispatch: (action)=> dispatch(action)
//     }
// }

// mapDispatchToProps编写方式二：如下编写对象
// 本质是使用key，代理了action对象的创建和dispatch函数调用修改redux中的数据
// 所以使用key时传递的参数与action创建时传递的参数一致
const mapDispatchToProps = {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
}


// 创建一个 Count 容器组件，包裹CountUI 组件，并且向它传递props数据和函数
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
