// 该文件用于创建vuex中最为核心的store

// 引入Vue
import Vue from 'vue'

// 引入自定义的store模块
import CountOptions from './count'
import personOptions from './person'

// 引入Vuex
import Vuex from 'vuex'
// 应用插件，第一个参数是插件，后面的其他参数依次对应插件install方法中参数的位置，注意install方法的第一个参数是Vue
// vuex插件必须先应用然后再创建store
Vue.use(Vuex)


// 创建store并暴露store
export default new Vuex.Store({
    // 添加不同模块的的store，属性名是自定义的模块名称，属性值是store模块对象
    // 注意模块对象上必须有namespaced:true 属性设置
    modules:{
        countAbout:CountOptions,
        personAbout:personOptions,
    }
})