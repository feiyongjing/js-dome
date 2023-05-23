// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')


// 创建文件夹，文件夹路径和回调函数
fs.stat('./fileSystem',(err,data)=>{
    if(err){
        console.log('操作失败',err)
        return
    }
    console.log('文件夹或目录资源的信息',data)    
    console.log('资源是文件吗？',data.isFile())
    console.log('资源是文件夹吗？',data.isDirectory())
})