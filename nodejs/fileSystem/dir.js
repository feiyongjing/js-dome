// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')


// 创建文件夹，文件夹路径和回调函数
// fs.mkdir('./html',err=>{
//     if(err){
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })

// 递归创建文件夹，文件夹路径和选项、回调函数
// recursive是递归的意思
fs.mkdir('./html/a/b', { recursive: true }, err => {
    if (err) {
        console.log('递归创建文件夹操作失败',err)
        return
    }
    console.log('递归创建文件夹操作成功')
})

// readdir读取目录下的文件或文件夹名称
// 参数是路径和回调函数
fs.readdir('.',(err,data) => {
    if (err) {
        console.log('读取的目录下文件和文件夹操作失败')
        return
    }
    console.log('读取的目录下文件和文件夹是个数组',data)
})

// rmdir读取目录下的文件或文件夹名称
// 参数是路径和选项、回调函数
// 添加选项{ recursive: true }递归删除
// 注意操作这个文件夹时文件夹必须存在否则会操作失败
// 也可以替换rmdir为rm，接收的参数一致
fs.rmdir('./html/a/b',(err) => {
    if (err) {
        console.log('操作失败')
        return
    }
    console.log('删除html/a/b成功',err)
})