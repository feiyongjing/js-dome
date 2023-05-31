const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    mode: 'development', //设置打包环境 production生产环境，development开发环境

    // 指定打包的入口文件
    entry: "./src/index.ts",

    // 指定打包文件输出的目录和文件名称
    output: {
        // 打包文件的输出目录
        path: path.resolve(__dirname, 'dist'),

        // 打包后的文件
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // test指定的是规则生效的文件，这里是指定ts结尾的文件
                test: /\.ts$/,
                // 要使用ts-loader
                use: 'ts-loader',
                // 要排除的文件，这里排除的本地的依赖包文件
                exclude: /node-modul/
            }
        ]
    },

    // 配置webpack插件
    plugins:[

        // 模板生成html
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),

        // webpack清除打包好的js文件和模板文件，避免一部分包打好一部分失败导致的脏数据问题
        new CleanWebpackPlugin(),
        
    ],

    // 默认ts不知道哪些自定义的模块文件可以引入，需要设置告诉它哪些文件是可以当成模块引入的
    resolve:{
        extensions:['.ts','.js']
    }
}