const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');    // 检查代码规范插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html打包插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // 插件封装样式css打包成一个文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 插件压缩打包的css文件

// 获取不同样式的loader配置
function getStyleLoader(pre) {
    return [
        // 检测使用的loader，顺序是自下而上依次使用loader检测
        // 'style-loader',  // 将js中css通过style标签添加到html文件中生效，所以打包后不会出现.css文件，而是在浏览器中出现style标签
        MiniCssExtractPlugin.loader,   // 使用MiniCssExtractPlugin.loader替换stylus-loader
        'css-loader',     // 将css资源编译成commonjs的模块到js中，前提是js文件中引用了css文件
        {
            loader: 'postcss-loader',  // postcss-loader处理样式的兼容性，注意需要写在css-loader的前面，其他样式的后面
            options: {
                postcssOptions: {
                    plugins: [
                        [
                            'postcss-preset-env',  // postcss-preset-env可以解决大多数的样式兼容性问题
                        ],
                    ],
                },
            },
        },
        pre,  // 不同样式的loader
    ].filter(Boolean) // filter(Boolean)过滤空的元素
}


module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        // 打包后的文件输出目录，需要使用绝对路径
        path: path.resolve(__dirname, '../dist'),
        // 打包后的文件名称
        filename: 'main.js',
        // 自动清空上次打包的内容
        // 在打包前自动清空path指定的打包目录下全部内容，再打包输出到path目录下
        clean: true,
    },

    // 加载器
    module: {
        // 每个loader的配置
        rules: [
            {
                test: /\.css$/,  //css-loader只检测.css后缀的文件
                use: getStyleLoader()
            },
            {
                test: /\.less$/,  //less-loader只检测.less后缀的文件
                use: getStyleLoader('less-loader') // 将less资源编译成css文件，前提是js文件中引用了less文件
            },
            {
                test: /\.s[ac]ss$/,  //sass-loader只检测.sass和.scss后缀的文件
                use: getStyleLoader('sass-loader') // 将sass资源或scss资源编译成css文件，前提是js文件中引用了sass文件或scss文件
            },
            {
                test: /\.styl$/,  //stylus-loader只检测.styl后缀的文件
                use: getStyleLoader('stylus-loader') // 将styl资源编译成css文件，前提是js文件中引用了styl文件
            },
            {
                test: /\.(png|jpg|gif|webp|svg)$/,  //只检测对应后缀的图片文件
                type: "asset", //asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。
                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        //图片小于50kb,就会被base64处理，一般处理8-12KB的图片
                        //优点： 减少请求数量
                        //缺点： 图片体积会变大
                        maxSize: 50 * 1024, // 25kb
                    }
                },
                generator: {
                    //输出图片的路径图片名称取前10位hash值
                    filename: 'img/[hash:10][ext][query]',
                },
            },
            {
                test: /\.(ttf|woff|woff2?|mp3|mp4|avi)$/,  //只检测对应后缀的视频、音频、字体图片等文件
                type: "asset/resource", //asset/resource 打包输出原文件，不会加密
                generator: {
                    //输出图片的路径图片名称取前10位hash值
                    filename: 'media/[hash:10][ext][query]',
                },
            },
            {
                test: /\.m?js$/,  // babel设置只处理js后缀文件
                exclude: /(node_modules|bower_components)/, // 排除node_modules和bower_components文件不处理
                use: {
                    loader: 'babel-loader',
                }
            }


        ],


    },
    // 插件使用，注意插件需要使用模块化引入
    plugins: [
        // eslint插件检查js和JSX
        new ESLintPlugin({
            // 检查哪些文件的代码，如下是检查当前目录下的src目录下的所有文件
            context: path.resolve(__dirname, '../src'),
        }),

        // html打包插件，默认在production生产模式下会压缩打包文件 
        new HtmlWebpackPlugin({
            // 模板：以指定文件创建新的文件
            // 新的html文件特点：1、结构和原来的一致 2、会自动引入打包输出的资源
            template: path.resolve(__dirname, '../public/index.html')
        }),

        // 使用MiniCssExtractPlugin.loader替换stylus-loader
        new MiniCssExtractPlugin({
            // 将全部的css打包成一个css文件
            filename: 'css/main.css'
        }),

        // 插件压缩打包的css文件
        new CssMinimizerPlugin(),
    ],

    // 开发热启动，不会生产打包后的资源文件，而是在直接打包在内存中运行
    devServer: {
        host: "localhost",  //启动服务器ip
        port: "3000",       //启动服务器的端口
        open: true          //是否自动打开浏览器
    },


    optimization: {
        // 开发环境下启用css打包成单独的文件
        minimize: true,
    },

    // 模式 development是开发模式，production是生产模式 
    // 使用开发模式打包不会压缩打包后的文件，而使用生产模式打包会压缩打包后的代码
    mode: 'development',
}