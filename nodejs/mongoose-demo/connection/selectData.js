const db = require('./db/db');
const BookModel = require('./model/BookModel');
//导入 mongoose
const mongoose = require('mongoose');

db(() => {
  

  // 查询单条数据，即更新符合条件的第一条数据，或者使用findById('xxxx')根据id查询数据
  // 第一参数是条件筛选
  // BookModel.findOne({
  //   name: "红楼梦"
  // }).then((res) => {
  //   console.log("单条数据查询成功，查询的数据是", res)
  //   //4.关闭数据连接 项目运行过程中不会添加该代码
  //   mongoose.disconnect();
  // }).catch((err) => {
  //   console.log("单条数据查询出错", err)
  //   //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
  //   mongoose.disconnect();
  // })


  // 批量查询，即查询符合条件的全部数据，注意匹配条件一定要写对，否则会查询全部数据
  // 第一参数是条件筛选

  // 条件过滤
  // find({"author":"余华"})     where author = '余华'
  // find({"price":{$lt:10}})	   where price < 10
  // find({"price":{$lte:10}})	 where price <= 10
  // find({"price":{$gt:10}})	   where price > 10
  // find({"price":{$gte:10}})	 where price >= 10
  // find({"price":{$ne:10}})	   where price != 10
  // find({"price":{$ne:10}})	   where price != 10
  // find({ $and: [{ price: {$gt:10} }, { price: {$lt:20} }] })  where price > 10 and price < 20
  // find({ $or: [{ author: '余华' }, { author: '曹雪芹' }] })    where author = '余华' or author = '曹雪芹'
  // find({ name: new RegExp('三')})                             where name like '%三%'

  // 只查询需要的数据
  // 返回的数据中是否带有某些属性,注意除了_id，出现的其他属性一律都只能全部表示是1或者全部都是0，否则查询报错
  // 1表示显示该属性，0表示不显示
  // 一律是1表示只显示这些属性，文档中其他除了_id的属性都隐藏不查询出来
  // 一律是0表示不显示这些属性，文档中其他除了_id的属性都查询出来
  // select({name:1,author:1})  select name, author from books where ...  

  // 查询结果排序
  // .sort({price: 1})    order by price ASC   升序排列
  // .sort({price: -1})   order by price DESC  降序排列

  // 分页查询
  // .skip(2)        limit 2    偏移量跳过前面两条数据从第三条数据开始
  // .limit(5)       limit 0,5  从偏移量开始取5条数据，如果没有设置偏移量就从0开始

  BookModel
    .find({})
    // .select({ name: 1, author: 1, _id: 0 })
    .sort({ price: 1 })
    .skip(2)
    .limit(5)
    .then((res) => {
      console.log("批量查询成功，批量查询的数据是", res)
      //4.关闭数据连接 项目运行过程中不会添加该代码
      mongoose.disconnect();
    }).catch((err) => {
      console.log("批量查询出错", err)
      //  8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
      mongoose.disconnect();
    })

})


