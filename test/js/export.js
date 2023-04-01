// export将当前的变量或函数做成模块的变量和函数
// 模块变量和函数可以在其他的模块通过import进行引入使用
// 注意在HTML的script标签在声明js文件的类型是模块 type="module" 
// 项目开发中：模块资源服务端配置 Access-Control-Allow-Origin，可以指定具体域名，或者直接使用 * 通配符
// 日常学习中：VS Code 安装Live Server插件，然后在html中右键Open with Live Server 
export var firstName = "firstName"
export var lastName = "lastName"
export function getName() {
    return "嘉文四世"
}
// default默认函数在import使用时无需知道函数的名称，可以自定义函数的名称，
// 这个自定义函数的名称在模块文件中找不到就会自动的使用默认函数
export default function(){
    return "default默认函数，一个模块文件中只能有一个默认函数"
}