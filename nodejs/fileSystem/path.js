// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')

// __dirname代表当前文件所在目录的绝对路径
console.log('__dirname代表当前文件所在目录的绝对路径',__dirname)
// fs.readFile(__dirname+'/path.js',(err,data)=>{
//     if (err) {
//         console.log('读取文件失败',err)
//         return
//     }
//     console.log('读取文件成功',data.toString())
// })


// __filename代表当前文件的绝对路径
console.log('__filename代表当前文件的绝对路径',__filename)
fs.readFile(__filename,(err,data)=>{
    if (err) {
        console.log('读取文件失败',err)
        return
    }
    console.log('读取文件成功',data.toString())
})

// 引入路径模块
const path=require('path')
// resolve拼接路径，自动添加系统分隔符，所以不要添加
console.log('拼接后的路径：',path.resolve(__dirname,'test','path.js'))

// sep 获取系统分隔符 windows 是\  Linux是/
console.log('当前系统的系统分隔符是：',path.sep)

// parse是解析路径并返回对象，对象包含资源所在盘符、目录、文件或文件夹名、文件后缀、文件不包含后缀的名称
console.log('解析路径并返回对象',path.parse(__filename))

// basename获取路径的基础名称
console.log('获取文件名（包含后缀）',path.basename(__filename))

// dirname获取路径的目录名
console.log('获取路径的目录名',path.dirname(__filename))

// extname获取路径的扩展名
console.log('获取文件后缀名',path.extname(__filename))