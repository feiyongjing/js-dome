// 设置全局的过滤器，注意必须要在所有的VM实例创建之前设置才行
// Vue.filter('timeFormater',function(value,str="YYYY-MM-DD HH:mm:ss"){
//     return dayjs(value).format(str)
// })


const timeVm = new Vue({
    el: ".timeVm",

    data: {
        time:Date.now()
    },

    // 方法方式格式化时间
    methods: {
        getFmtTime(){
            return dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        }
    },

    // 计算属性方式格式化时间
    computed:{
        fmtTime(){
            return dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        }
    },

    // 过滤器方式格式化时间
    // 注意这是局部的过滤器只有当前Vm管理标签范围内可以使用
    filters:{
        // 过滤器的第一个参数默认是管道符前的标准输出
        // str="YYYY-MM-DD HH:mm:ss"是当该参数不传递时的默认参数
        timeFormater(value,str="YYYY-MM-DD HH:mm:ss"){
            return dayjs(value).format(str)
        },

        timeFormaterDate(value,str="YYYY-MM-DD"){
            return dayjs(value).format(str)
        }
    }
})