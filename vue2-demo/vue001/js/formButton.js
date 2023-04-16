let buttonFormVm = new Vue({
    el: ".buttonFormVm",
    data: {
        userInfo: {
            account: "",
            password: "",
            age: "",
            sex: "",
            happy: [],
            city: "",
            other: "",
            agree: "",
        },

    },
    methods: {
        demo() {
            // console.log(JSON.stringify(this.userInfo))
        }
    },
})