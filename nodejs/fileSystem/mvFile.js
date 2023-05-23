// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')

// 修改文件名称或移动文件
fs.rename('./座右铭.txt','./论语.txt',err=>{

    if(err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})