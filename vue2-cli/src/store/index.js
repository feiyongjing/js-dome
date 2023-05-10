// 该文件用于创建vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用插件，第一个参数是插件，后面的其他参数依次对应插件install方法中参数的位置，注意install方法的第一个参数是Vue
// vuex插件必须先应用然后再创建store
Vue.use(Vuex)

// 准备actions，用于响应组件中的动作
const actions={}
// 准备mutations，用于操作数据
const mutations={}
// 准备state，用于存储数据
const state={}



// 创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})