// 打印日志到浏览器的控制台中
console.log("js打印hello world")

// 打开或者是刷新浏览器出现弹出框
// alert("js弹出框")

// js直接输出到网页页中
// document.write("js直接输出到页面中")

// js5有六种数据类型 分别是数字、字符串、布尔、对象、null、undefined ，js6有添加了Symbol和BigInt
// 基本数据类型数字、字符串、布尔如下，另外双引号和单引号包裹的都是字符串，布尔类型可以将false写成0、true写成1
var age = 24;
var name = "费永敬";
var flag = true;

// 复合数据类型对象(object)如下
var user = {
    age: 24,
    name: "费永敬",
    flag: true
}

// null和undefined是特殊类型，null一般代表对象为空，undefined一般代表数值没有
// 一般如果声明了变量但是未赋值这个变量就是undefined或者是null，大部分请求下是undefined

// typeof 用于判断基本数据类型
console.log("打印24的数据类型" + typeof 24)              // 控制台打印number
console.log('打印"费永敬"的数据类型' + typeof "费永敬")   // 控制台打印string
console.log("打印true的数据类型" + typeof true)          // 控制台打印boolear

// 比较运算符：==  ===  !=  !==
console.log('10=="10"数值比较，输出结果' + (10 == "10"))                           // 输出true
console.log('10==="10"严格比较，即比较数值也比较类型，输出结果' + (10 === "10"))    // 输出false

console.log('10!="10"数值比较，输出结果' + (10 != "10"))                           // 输出false
console.log('10!=="10"严格比较，即比较数值也比较类型，输出结果' + (10 !== "10"))    // 输出true

// 注意!取反运算只要以下6个值是true其他的都是false
console.log("false取反"+!false);
console.log("0取反"+!0);
console.log("null取反"+!null);
console.log("undefined取反"+!undefined);
console.log("空字符串取反"+!"");
console.log("NaN取反"+!NaN);





