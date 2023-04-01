// 将变量与对象的属性绑定，两者变化一个另一个也会随之变化
let number = 18
let person = {
    name: "张山",
    sex: "男"
    //    age:number  使用这个方式设置对象的属性是无法随着nunber变量的变化而变化
}

Object.defineProperty(person, "age", {
    value: number,       //属性的值
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


// 数据代理，使用一个对象来操控另一个对象的属性
let obj1={x:1}
let obj2={y:1}
Object.defineProperty(obj2, "x", {
  
    enumerable: true,    //控制属性是否允许枚举遍历，默认是false
    writable: true,      //控制属性是否允许被修改，默认是false
    configurable: true,  //控制属性是否允许被删除，默认是false

    // 由obj2对象来代理obj1，即读取obj2的属性其实是读取的obj1的属性
    get() {
        return obj1.x;
    },

    // 由obj2对象来代理obj1，即修改obj2的属性其实是修改的obj1的属性
    set(value) {
        obj1.x=value;
    }

})