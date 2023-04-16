const listRenderingVm = new Vue({
    el: ".listRenderingVm",

    data: {
        keyWord: '',
        sortType: 0,  // 排序方式：0代表原顺序排序、1代表生效排序，2代表降序排序
        persons: [
            { id: '001', name: "马冬梅", age: 28, sex: "女" },
            { id: '002', name: "周冬雨", age: 21, sex: "女" },
            { id: '003', name: "周杰伦", age: 24, sex: "男" },
            { id: '004', name: "温兆伦", age: 18, sex: "男" }
        ],
        // filPersons: [],
        car: {
            name: "奥迪A8",
            price: "70万RMB",
            color: "黑色"
        },
        student:{
            name:'张三',
            sex:'男',
            hobby:[
                "篮球",
                "跑步",
                "电子游戏"
            ]
        }
    },

    methods:{

        updatepersons(){

            // 错误的写法
            // this.persons[0]="{ id: '001', name: '马老师', age: 28, sex: '女' }"
            // 数组中的元素不可以直接通过索引赋值直接修改，需要使用以下7个数组方法修改
            // push()、pop()、shift()、unshift()、splice()、sort()、reverse()
            // 数组方法修改正确的写法
            // this.persons.splice(0,1,"{ id: '001', name: '马老师', age: 28, sex: '女' }")
            // 但是如果数组元素是一个个对象，那么元素对象的属性是可以直接修改的，如下
            this.persons[0].name="马老师"
        },

        // 默认没有年龄，调用方法添加年龄属性
        addAge(){
            // 方式1：给指定的VM添加属性和属性值
            Vue.set(this.student,'age',18)
            // 方式2：给指定的VM添加属性和属性值
            // this.$set(this.student,'age',18)
            // 注意以上两种方法都只能给VM的date属性下的对象属性里面添加属性
        },


        updatehobby(){
            // 错误的写法
            // this.student.hobby[0]="乒乓球"
            // 数组中的元素不可以直接通过索引赋值直接修改，需要使用以下7个数组方法修改
            // push()、pop()、shift()、unshift()、splice()、sort()、reverse()
            // splice数组方法第一个参数定义新元素应该被添加的位置。第二个参数定义应该删除多个元素。第三个和之后的参数被当作插入的元素
            // 但是如果数组元素是一个个对象，那么元素对象的属性是可以直接修改的，如下
            // this.persons[0].name="马老师"
            this.student.hobby.splice(0,1,"乒乓球")
        }


    },

    // 列表过滤和排序计算属性实现
    computed: {
        filPersons: {

            get() {
                let arr = this.persons.filter((p) => {
                    return p.name.indexOf(this.keyWord) !== -1
                })
                // 年龄排序实现
                if (this.sortType) {
                    arr.sort((p1, p2) => {
                        return this.sortType === 1 ? p1.age - p2.age : p2.age - p1.age
                    }
                    )
                }
                return arr;
            }

        },

    }

    // 列表过滤和排序watch实现
    // watch: {
    //     keyWord: {
    //         immediate: true,
    //         handler(newValue, oleValue) {
    //             let arr = this.persons.filter((p) => {
    //                 return p.name.indexOf(newValue) !== -1
    //             })

    //              // 年龄排序实现
    //              if (this.sortType) {
    //                 arr.sort((p1, p2) => {
    //                     return this.sortType === 1 ? p1.age - p2.age : p2.age - p1.age
    //                 }
    //                 )
    //             }
    //             this.filPersons = arr;
    //         }
    //     }
    // }
})