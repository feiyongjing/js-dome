module.exports = {
    // @babel/preset-env是智能预设，能编译ES6的语法
    // @babel/preset-react 能编译React jsx语法的预设
    // @babel/preset-typescript 能编译TypeScript语法的预设
    presets: ["@babel/preset-env"],
    // Babel 对一些公共方法使用了非常小的辅助代码，默认情况下会被添加到每一个需要它的文件中。
    // 使用babel/plugin-transform-runtime来避免重复引入。
    plugins: ['@babel/plugin-transform-runtime'],
}