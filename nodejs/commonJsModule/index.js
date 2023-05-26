// 引入自定义模块（建议写），注意自定义的模块引入不能省略 ./ 和 ../ 这些相对路径
// 引入的模块如果是js或json文件是可以省略文件后缀名
// 如果有同名的js和json文件导入省略的后缀名则会导入js文件
// 如果导入的文件没有后缀则会将文件内容当成js文件进行导入
// 如果是导入nodejs的内置模块无需写相对路径，如fs模块、http模块
const me = require('./me')
const jsonData = require('./test')

// 导入文件夹模块，会去对应的文件夹下找packages.json的main属性在文件夹模块下找对应的js文件或json导入
// 如果没有packages.json文件或者是找不到packages.json的main属性对应的js文件或json，
// 则会在文件夹模块下找默认的index.js或json导入
const m=require('./test-modile')


console.log("打印引入的json文件数据",jsonData)

// 直接使用引入模块中的函数或是数据
me.tiemo();
me.niejiao();
