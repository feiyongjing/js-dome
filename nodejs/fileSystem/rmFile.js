// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')

// 异步删除文件方式一 
// 同步删除请使用unlinkSync
// fs.unlink('./观书有感1.txt',err=>{

//     if(err){
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })


// 删除文件方式二：nodejs 14.4 引入的
// 同步删除请使用rmSync
fs.rm('./观书有感1.txt',err=>{

    if(err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})