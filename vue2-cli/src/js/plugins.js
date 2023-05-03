import dayjs from "dayjs"
// 插件安装
export const myPlugin = {
    // install方法的第一个参数是Vue，后面的其他参数依次对应Vue.use时对应的参数位置
    install(Vue) {

        // 全局过滤器
        Vue.filter('timeFormater', function (value, str = "YYYY-MM-DD HH:mm:ss") {
            return dayjs(value).format(str)
        })

        // 全局自定义v-fbind指令
        Vue.directive("fbind",{

            // 自定义的指令与标签绑定成功时，注意这个时候的element是虚拟DOM，这个时候不是真实DOM无法获取它的焦点
            bind(element,binding){
                element.value=binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在模板被重新解析时调用
            update(element,binding) {
                element.value=binding.value
                element.focus()
            },

        })

        // 全局定义混入代码
        Vue.mixin({
            data() {
                return {
                    code:"001"
                };
            },
        })

        // 给Vue原型上添加一个方法，vm和vc都能使用
        Vue.prototype.hello=()=>{alert("hello world")}


    }
}