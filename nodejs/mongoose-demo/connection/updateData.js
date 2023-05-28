const db = require('./db/db');
const BookModel = require('./model/BookModel');
//导入 mongoose
const mongoose = require('mongoose');

db(() => {
  // 单条数据更新，即更新符合条件的第一条数据
  // 第一参数是条件筛选
  // 第二参数是更新的内容
  BookModel.updateOne({
    name: "红楼梦"
  }, {
    price: 9.9
  }).then((res) => {
    console.log("更新成功，影响的数据条数是", res.modifiedCount)
    //4.关闭数据连接 项目运行过程中不会添加该代码
    mongoose.disconnect();
  }).catch((err) => {
    console.log("更新数据出错", err)
    //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  })


  // 批量更新，即删除符合条件的全部数据，注意匹配条件一定要写对，否则会更新全部数据
  BookModel.updateMany({
    author: '余华'
  }, {
    is_hot: false
  }).then((res) => {
    console.log("更新成功，影响的数据条数是", res.modifiedCount)
    //4.关闭数据连接 项目运行过程中不会添加该代码
    mongoose.disconnect();
  }).catch((err) => {
    console.log("更新数据出错", err)
    //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  })
})


