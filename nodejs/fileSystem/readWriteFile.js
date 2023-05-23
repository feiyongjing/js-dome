// 操作文件系统需要提前导入fs模块，使用require导入模块
const fs = require('fs')

// writeFile函数异步写入内容到文件中，分别接收目标文件路径、写入内容、选项配置、回调函数，选项配置可以省略
// 注意文件不存在会创建该文件再写入内容，如果存在则会覆盖其内容
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
    // err 在写入失败时是错误对象，里面有错误信息。而写入成功是null
    // 当程序的主线程执行完后回调该函数
    if(err){
        console.log("如果读取失败了打印错误信息",err);
    }
})

// writeFile函数同步写入内容到文件中，分别接收目标文件路径、写入内容
// fs.writeFileSync('./座右铭.txt','test')

// 实现追加写入文件方式一
// writeFile添加第三参数对象设置flag属性，而回调函数是第四参数，
// 或者是writeFileSync加第三参数对象设置flag属性
fs.writeFile('./座右铭.txt', '\r\n择其善者而从之，其不善者而改之',{flag:'a'}, err => {
    if(err){
        console.log("如果读取失败了打印错误信息",err);
    }
})

// 实现追加写入文件方式二
// 使用appendFile或者是appendFileSync，与writeFile的参数类似
fs.appendFile('./座右铭.txt', '\r\n温故而知新，可以为师矣', err => {
    if(err){
        console.log("如果读取失败了打印错误信息",err);
    }
})

// 流式写入文件，与writeFile写入相比建立了与文件的连接，减少了建立连接的打开关闭文件的次数
// 流式写入适用于大文件写入和频繁写入，而writeFile适合写入频率低的场景
// let ws= fs.createWriteStream('./观书有感.txt')
// ws.write('半亩方塘一鉴开\r\n')
// ws.write('天光云影共徘徊\r\n')
// ws.write('问渠那得请如许\r\n')
// ws.write('为有源头活水来\r\n')
// ws.end();

//写入成功后会自动关闭流，可以不用手动关闭流
// ws.close();


// 同步写入一些内容避免下面读取文件读取不到或读取不全
fs.appendFileSync('./观书有感.txt','半亩方塘一鉴开\r\n')
fs.appendFileSync('./观书有感.txt','天光云影共徘徊\r\n')
fs.appendFileSync('./观书有感.txt','问渠那得请如许\r\n')
fs.appendFileSync('./观书有感.txt','为有源头活水来\r\n')

// 异步读取文件内容,分别接收目标文件路径、选项配置、回调函数，选项配置可以省略
fs.readFile('./观书有感.txt',(err, data)=>{
    if(err){
        console.log("如果读取失败了打印错误信息",err);
    }
    console.log(data.toString())

})

// 同步读取文件内容
// console.log(fs.readFileSync('./观书有感.txt').toString())

// 流式读取文件，与readFile读取相比建立了与文件的连接，减少了建立连接的打开关闭文件的次数
// 流式读取文件是一个个块读取文件内容
// 流式读取适用于大文件读取和频繁读取，而readFile适合读取频率低的场景
let rs=fs.createReadStream('./观书有感.txt');

// 绑定事件，事件回调函数，chunk是块
// rs.on('data',chunk=>{
//     console.log('块大小',chunk.length)  // 读取一个完整的块是65536字节是64kb
//     console.log('块数据',chunk.toString())
// })

// rs.on('end',()=>{
//     console.log('读取完成')
// })

// 复制文件方式一
// 读取文件内容
// let data=fs.readFileSync('./观书有感.txt')
// 写入文件内容
// fs.writeFileSync('./观书有感1.txt',data)

// 方式二 流式操作
// 读取文件内容
let rs1=fs.createReadStream('./观书有感.txt')
// 写入文件内容
let ws1=fs.createWriteStream('./观书有感1.txt')

rs1.on('data1',chunk =>{
    ws1.write(chunk)
})

