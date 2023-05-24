// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')

// 将整个文件转换为二进制数据写入其他文件
fs.readFile('./jwt.jks', (err, data) => {
    if (err) {
        console.log("如果读取失败了打印错误信息", err);
    }
    // buffer的每个元素可以使用toString(2)转换为二进制数据，但是注意转换的二进制数据最前面的0全部不保留
    // console.log(data[0].toString(2))
    // 打印16进制数据与以下2进制数据比较
    console.log(data)

    let test = ''

    data.forEach(value => {
        let str= value.toString(2)
        // 前面补0
        let e = 8 - str.length
        let i=0
        for (; i < e; i++) {
            str = '0' + str
        }
        // 每个字节都使用空格隔开
        test = test + ' ' + str
    })

    console.log(test)

    fs.writeFileSync('./jks.bin', test)
})

// console.log(fs.readFileSync('./jks.bin','utf8').toString())
