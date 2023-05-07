const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false, //关闭语法检测，一些创建后没有使用的函数或者变量会导致语法检查不过
  transpileDependencies: true
})
