// lowdb安装npm i lowdb@1.0.0
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// 数据存放文件 
const adapter = new FileSync('db.json')
// 获取db对象
const db = low(adapter)

// 在当前目录下运行 node lowdb.js 初始化写入数据
db.defaults({posts:[], user:{}}).write()

// 写入数据
db.get('posts').push({ id: 1, title: '今天天气还不错' }).write()
db.get('posts').push({ id: 2, title: '今天天气一般' }).write()
// 在前面写入数据
db.get('posts').unshift({ id: 3, title: '今天天气糟糕' }).write()

// 删除数据
// const res = db.get('posts').remove({ id: 1 }).write()
// console.log(res)

// 获取单条数据
// let res=db.get('posts').find({ id: 2}).value()
// console.log(result)

// 更新数据
// let res=db.get('posts').find({ id: 2}).assign({title: '今天天气凉爽'}).write()
// console.log(res)