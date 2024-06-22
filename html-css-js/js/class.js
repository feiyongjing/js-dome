// 在ES5都是使用首字母大写的函数作为类
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// 原型对象设置属性
// Person.prototype.getName(){
//     console.log(this.name);
// }


// ES6类独立出来了,注意必须先定义后使用类，
// 子类继承父类和java基本一致都是使用extends，只有一点不同的是子类也会继承父类的静态方法和静态属性
// 可以通过子类的类名去调用父类的静态方法和属性
class Person {
    
    static staticTest(){
        return "静态方法的设置使用java一样";
    }

    // 构造函数，并且可以设置参数的默认值
    constructor(name, age=10) {
        this.name = name;
        this.age = age;
    }

    // 读取实例对象的name属性时这个方法会被调用，例如 new Person("哈哈").name，并且返回值就是最终读取到的数据
    get name(){
        console.log();
        return this.name;
    }

    // 修改实例对象的name属性时这个方法会被调用，例如 new Person("哈哈").name="abc"
    set name(name){
        this.name = name;
    }

    toString() {
        return "(" + this.name + "," + this.age + ")";
    }

}
// 通过类名点属性给静态属性赋值，和java static静态赋值是一样的但是是在外面赋值没有static修饰
Person.status="静态属性";
console.log("根据类创建对象实例调用实例方法",new Person("赵信",20).toString());

console.log(Person.staticTest());



