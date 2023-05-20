// 导入变量或函数，变量和函数的来源是指定的js文件(如下是./export.js文件)，可以使用as重新命名变量和函数
// 注意在HTML的script标签在声明js文件的类型是模块 type="module"
// 项目开发中：模块资源服务端配置 Access-Control-Allow-Origin，可以指定具体域名，或者直接使用 * 通配符
// 日常学习中：VS Code 安装Live Server插件，然后在html中右键Open with Live Server 
// import { firstName, lastName, getName as myGetName} from "./export.js"
// 导入变量后可以使用变量和函数
// console.log(firstName)
// console.log("英雄联盟在皇子的全名是",myGetName())


// 使用*简化引入./export.js文件中的全部变量和函数，as为*添加别名，通过别名点变量名和函数名引用变量和函数
import * as MyHello from "./export.js"
console.log("英雄联盟在皇子的全名是",MyHello.getName())

// default默认函数在import使用时无需知道函数的名称，可以自定义函数的名称并且无需使用花括号包裹，
// 这个自定义函数的名称在模块文件中找不到就会自动的使用默认函数
// import xxxxx from "./export.js"
// console.log("模块引用default默认函数，",xxxxx())