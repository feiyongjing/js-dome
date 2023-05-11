// store中包含actions用于响应组件中的动作
// mutations用于操作数据
// state用于存储数据
// getters用于加工计算属性
// 修改或是查看vuex state数据链路是先 vm.$store.dispatch 选择调用 actions中的函数
// 然后actions中的函数通过默认的第一参数context, context.commit选择调用 mutations中的函数
// 最后在mutations中的函数通过默认的第一参数state，修改state中的数据
// 如果是简单的修改或是查看可以省略调用actions中的函数，而是直接this.$store.commit 选择调用mutations中的函数
export default {

    // 开启模块化，当前store是一个独立的模块
    namespaced:true,

    // 准备actions，用于响应组件中的动作
    actions: {
        // 复杂的业务可以写在actions的函数中
        // 可以从第一参数context中获取一些信息，比如state数据和commit函数
        jiaOdd(context, value) {
            console.log("actions的context参数上下文",context)
            if (context.state.sum % 2) {
                // 简单的修改写在mutations中
                // 通过commit选择调用mutations函数和传递参数
                context.commit("jia", value)
            }

        },
        // 复杂的业务可以写在actions的函数中
        // 可以从第一参数context中获取一些信息，比如state数据和commit函数
        jiaWait(context, value) {
            setTimeout(() => {
                // 简单的修改写在mutations中
                // 通过commit选择调用mutations函数和传递参数
                context.commit("jia", value)
            }, 500);
        }
    },

    // 准备mutations，用于操作数据
    mutations: {
        // 简单的修改写在mutations中
        // 第一个参数默认是state数据，后面的参数是commit传入的
        jia(state, value) {
            state.sum += value
        },
        // 简单的修改写在mutations中
        // 第一个参数默认是state数据，后面的参数是commit传入的
        jian(state, value) {
            state.sum -= value
        },
    },

    // 准备state，用于存储数据
    state: {
        sum: 0,
        school: '育才初级中学',
        subject: "物理",
    },

    // 加工计算属性，可以方便的计算
    getters: {
        // 通过vm.$store.getters.bigsum就可以调用该计算属性了
        bigSum(state) {
            return state.sum * 10
        }
    }
}