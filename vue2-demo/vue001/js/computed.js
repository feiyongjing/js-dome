const computedV = new Vue({
    // el指定创建的Vue对象为一个容器服务，值通常是css选择器表达式，即使css选择器表达式匹配多个容器也只有第一个容器生效
    el: ".computedV",
    // data存储数据对象式写法，数据提供给el属性指定的容器服务，一旦Vue中data存储的数据变化el属性指定的容器中引用的地方也会变化
    data: {
        firstName: "张",
        lastName: "三",
    },
    // computed存储计算属性,计算属性在Vue对象中并不是真实存在的，而是在需要的时候通过data中已有的属性计算出来的，并且带有缓存
    // Vue使其中的this是指向Vue对象
    computed: {

        // fullName计算属性是firstName和lastName以-连接的属性
        fullName: {
            // 当有人调用fullName计算属性时会调用get方法返回计算属性
            // 但是实际上在第一次读取fullName计算属性和get中所依赖的数据发生变化时会调用get，
            // 其他时候获取的fullName计算属性都是从缓存中读取的
            get() {
                console.log("fullName计算属性的get被调用了")
                return this.firstName + "-" + this.lastName;
            },
            // 当有人修改fullName计算属性时会调用set方法修改
            set(value) {
                this.firstName = value
                let arr = value.split("-")
                this.firstName = arr[0]
                this.lastName = arr[1]
            }
        },

        // 当只有get使用，而没有set使用时的简写，默认函数是get
        // fullName() {
        //     console.log("fullName计算属性的get被调用了")
        //     return this.firstName + "-" + this.lastName;
        // },


    }


})



