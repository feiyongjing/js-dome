//2. 导入 mongoose
const mongoose = require('mongoose');

//5. 创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let AccountsSchema = new mongoose.Schema({
    title: {type:String,required:true},
    time: {type:Date,required:true},
    type: {type:Number,required:true},
    account: {type:Number,required:true},
    remarks: String
});

//6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
// 第一参数是集合名称，集合不存在会创建，注意如果这里的集合名称是book单数形式，但是mongoose实际会创建复数的books集合
// 第二参数是文档的结构
let AccountsModel = mongoose.model('accounts', AccountsSchema);

module.exports=AccountsModel