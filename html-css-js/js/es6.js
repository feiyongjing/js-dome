/**
 * var是函数级别的作用域，有变量提升，先使用后声明不会报错只是变量是undefined，并且同一作用域同名变量可以多次声明
 * let是块级左右域（花括号级别作用域），let同一作用域同名变量只可以声明一次，
 * let没有变量提升，即不会将let变量自动提升，即let变量必须先声明后使用
 */
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {     // 这里只是函数赋值到数组元素并没有执行函数
        console.log(i)
    }
}
a[6](); // 会打印10，原因是由于var是函数基本作用域，所以只有一个i，在所有循环执行完时i=10，所以执行函数打印i是10

var b = [];
for (let i = 0; i < 10; i++) {
    b[i] = function () {     // 这里只是函数赋值到数组元素并没有执行函数
        console.log(i)
    }
}
b[6](); // 会打印6，原因是由于是函数基本作用域，所以有10个i，所以执行第7个函数打印i是6

// const声明常量，声明时必须赋值，const是块级左右域（花括号级别作用域），
// const同一作用域同名变量只可以声明一次，const没有变量提升，即不会将const变量自动提升
const eq = "常量"
console.log("const", eq)

// 对象的解构赋值
var user = {
    name: "张三",
    age: 20
}
// 将user对象中的属性直接拿出来，而不是使用user.name等获取user对象的属性
var { name, age } = user;
console.log("user对象解构赋值的属性name是", name)
console.log("user对象解构赋值的属性age是", age)

// 遍历字符串
var username = "xxasdasdw"
console.log("遍历字符串", username);
for (const i of username) {
    console.log(i);
}
// 字符串使用反引号可以包变量
var bilibili = "https://www.bilibili.com/"
var html = `<a href="${bilibili}">跳转到bilibili</a>`

// 读取数组，使用3个点快速读取而不用循环
console.log(...[1, 2, 3])
// 数组快速合并
console.log(...[...[1, 2, 3], ...[4, 5, 6]])

// 函数没有设置参数，但是可以通过arguments伪数组获取到参数
function add() {
    console.log("读取arguments[0]：", arguments[0]);
}
add("1")
// querySelectorAll获取的元素集合也是一个伪数组
var lis = document.querySelectorAll("li");
console.log("读取li标签集合伪数组lis[0]：", lis[0]);

// 伪数组对象如下
var user1 = {
    0: "李四光",
    1: "20",
    2: "男",
    length: 3,
}
console.log("打印伪数组对象user1：", user1["0"]);

// Array.from将伪数组转换成真正的数组（其实真正的数组相当与java的List集合），真正的数组拥有添加元素等方法
var user1List = Array.from(user1);
user1List.push("篮球")
console.log("打印真正的数组对象", user1List);

// Array.of将参数转换成真正的数组
console.log("打印真正的数组对象", Array.of(10, 20, 30));
// 创建一个具有3个长度的数组
console.log("创建一个具有3个长度的数组", Array(3));

// 对象的扩展
var name = "盖伦"
var ae = "age"
var user2 = {
    // name: name,
    name, // 如果是上面引用外面的变量就可以简写
    // age: "20",
    [ae]: "20", // 对象的属性名引用外面的数据和上面的age: "20"是一样的效果
    // getName:function(){
    //     console.log("打印名称:",this.name);
    // }
    // 对象中的函数可以简写
    getName() {
        console.log("打印名称:", this.name);
    }
}

// 箭头函数，其实就是java的拉姆达表达式
var sum = (x, y) => x + y;
// 注意如果是返回对象需要使用圆括号包裹返回值
var sum1 = (x, y) => ({ x, y });
// 注意对于普通函数来说this是指向的函数运行时所在的对象，而箭头函数则是指向函数运行时上层作用域中的this

// Set数据结构，其实就是Java的HashSet,不能放重复的数据
var s = new Set();
Array.of(155, 155, 223, 35, 488, 599).forEach(x => s.add(x));
console.log("打印Set：", s);
// set转数组
console.log("set转数组：", Array.of(...s));
console.log("set转数组：", [...s]);
// 字符串xaaabbbccccdddd字符去重
console.log("字符串xaaabbbccccdddd字符去重：", [...new Set("xaaabbbccccdddd")].join(""));
// 字符串"5"和数字5的数据类型不同，所以它们不是重复的数据可以同时在一个Set中
console.log("字符串'5'和数字5的数据类型不同，所以它们不是重复的数据可以同时在一个Set中", ...new Set(["5", 5]));


// 将变量与对象的属性绑定，两者变化一个另一个也会随之变化
let number = 18
let person = {
    name: "张山",
    sex: "男"
    //    age:number  使用这个方式设置对象的属性是无法随着nunber变量的变化而变化
}

Object.defineProperty(person, "age", {
    value: number,
    enumerable: true,    //控制属性是否允许枚举遍历，默认是false
    writable: true,      //控制属性是否允许被修改，默认是false
    configurable: true,  //控制属性是否允许被删除，默认是false

    // 定义该属性的getter方法，当有人读取该属性时会自动的调用这个方法获取属性的值
    // 即当number被修改后，age属性也会变化
    get() {
        console.log("有人读取了age属性")
        return number;
    },

    // 定义该属性的setter方法，当有人修改该属性时会自动的调用这个方法修改属性的值
    // 即当age属性被修改后，number也会变化
    set(value) {
        console.log("有人修改了age属性")
        number = value;
    }

})

console.log(Object.keys(person))



