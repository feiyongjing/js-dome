// 引入react-redux的connect用于自定义的Count UI组件和redux的连接
import {connect} from 'react-redux'

// 引入自定义的Count UI组件
import CountUI from '../../components/Count/Count'


// 引入自定义的action对象构建函数
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count/create_count_action'

// 创建并且暴露一个 Count 容器组件
export default connect()(CountUI)
