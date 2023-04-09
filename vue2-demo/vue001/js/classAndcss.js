const classAndcssVm = new Vue({
    el: ".classAndcssVm",

    data: {
        a: "happy",
        n: 0,
        classarr: ["happy0","happy1","happy2"],
        classobj:{
            happy:false,
            sad:false,
            normal:false
        },

        styleobj:{
            width: "200px",
            height: "200px",
            // 注意css样式属性名称要换成驼峰
            backgroundColor: "red",
        }
    },


    methods: {
        changeMod() {
            let args=["happy","sad","normal"]
            let num=Math.floor(Math.random()*3)
            this.a =args[num] 
        },

        changeModClassarr() {
            let args=["happy","sad","normal"]
            this.classarr =args
        },

        changeModClassobj() {
            this.classobj.happy =!this.classobj.happy
            this.classobj.sad =!this.classobj.sad
            this.classobj.normal =!this.classobj.normal
        },

        changeModStyleobj() {
            this.styleobj.backgroundColor = "blue"
        }

    },
})
