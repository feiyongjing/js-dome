const db = require('./db/db');
const BookModel = require('./model/BookModel');
//导入 mongoose
const mongoose = require('mongoose');


db(() => {
  // 不建议删除数据，删除数据错误会导致无法恢复数据，建议使用逻辑删除修改字段数据当成删除
  // 单条删除，即删除符合条件的第一条数据
  BookModel.deleteOne({
    name: "西游记"
  }).then((res) => {
    console.log("删除成功，影响的数据条数是", res.deletedCount)
    //4.关闭数据连接 项目运行过程中不会添加该代码
    mongoose.disconnect();
  }).catch((err) => {
    console.log("删除数据出错", err)
    //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  })


  // 不建议删除数据，删除数据错误会导致无法恢复数据，建议使用逻辑删除修改字段数据当成删除
  // 批量删除，即删除符合条件的全部数据，注意匹配条件一定要写对，否则会删除全部数据
  BookModel.deleteMany({
    is_hot: false
  }).then((res) => {
    console.log("删除成功，影响的数据条数是", res.deletedCount)
    //4.关闭数据连接 项目运行过程中不会添加该代码
    mongoose.disconnect();
  }).catch((err) => {
    console.log("删除数据出错", err)
    //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  })
})







