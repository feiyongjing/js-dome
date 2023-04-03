const watchVm = new Vue({
    el: ".watchVm",
    data: {
        isHot: true,
        numbers: {
            a: 1,
            b: 2
        }
    },

    computed: {
        info() {
            return this.isHot ? "炎热" : "凉爽"
        },

    },

    methods: {
        changeWeather() {
            this.isHot = !this.isHot
        }


    },

    watch: {
        // 监视info属性，data的属性同理也可以监视
        info: {

            // immediate设置在初始化时是否调用handler，默认是false
            // immediate: true,

            // 当属性发生变化时被自动调用，newValue和oleValue分别是新的值和老的值
            handler(newValue, oleValue) {
                console.log("isHot被修改了，新的值和老的值是", newValue, oleValue)
            }
        },

        // 深度监视具体属性
        // 'numbers.a': {
        //     // 当属性发生变化时被自动调用，newValue和oleValue分别是新的值和老的值
        //     handler(newValue, oleValue) {
        //         console.log("numbers中的a属性被修改了，新的值和老的值是", newValue, oleValue)
        //     }
        // },


        // 监视简写:当只有handler函数需要设置时可以简写为以下形式
        'numbers.a'(newValue, oleValue) {
            console.log("numbers中的a属性被修改了，新的值和老的值是", newValue, oleValue)
        },

        // 深度监视全局属性
        numbers: {

            // 开启watch深度监视当前属性下的所有属性（递归监视）
            deep: true,
            // 当属性发生变化时被自动调用，newValue和oleValue分别是新的值和老的值
            handler(newValue, oleValue) {
                console.log("numbers中的属性被修改了,新的值和老的值是", newValue, oleValue)
            }
        }

    },
})

// 另一种设置属性监视，需要先有Vue实例
// watchVm.$watch("info",{

//     // 当属性发生变化时被自动调用，newValue和oleValue分别是新的值和老的值
//     handler(newValue,oleValue) {
//         console.log("isHot被修改了，新的值和老的值是",newValue,oleValue)
//     }
// })


