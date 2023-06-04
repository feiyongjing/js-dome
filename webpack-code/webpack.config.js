const path = require('path')


module.exports = {
    // 入口
    entry: './src/main.js',
    // 输出
    output: {
        // 打包后的文件输出目录，需要使用绝对路径
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名称
        filename: 'main.js',
    },

    // 加载器
    module: {
        // 每个loader的配置
        rules: [
            {
                test: /\.css$/,  //只检测.css后缀的文件
                use: [           // 检测使用的loader，顺序是自下而上依次使用loader检测
                    'style-loader',  // 将js中css通过style标签添加到html文件中生效，所以打包后不会出现.css文件，而是在浏览器中出现style标签
                    'css-loader'     // 将css资源编译成commonjs的模块到js中，前提是js文件中引用了css文件
                ]
            },
            {
                test: /\.less$/,  //只检测.less后缀的文件
                use: [           // 检测使用的loader，顺序是自下而上依次使用loader检测
                    'style-loader',  // 将js中css通过style标签添加到html文件中生效，所以打包后不会出现.css文件，而是在浏览器中出现style标签
                    'css-loader',     // 将css资源编译成commonjs的模块到js中，前提是js文件中引用了css文件
                    'less-loader'     // 将less资源编译成css文件，前提是js文件中引用了less文件
                ]
            },
            {
                test: /\.s[ac]ss$/,  //只检测.sass和.scss后缀的文件
                use: [           // 检测使用的loader，顺序是自下而上依次使用loader检测
                    'style-loader',  // 将js中css通过style标签添加到html文件中生效，所以打包后不会出现.css文件，而是在浏览器中出现style标签
                    'css-loader',     // 将css资源编译成commonjs的模块到js中，前提是js文件中引用了css文件
                    'sass-loader'     // 将sass资源或scss资源编译成css文件，前提是js文件中引用了sass文件或scss文件
                ]
            },
            {
                test: /\.styl$/,  //只检测.styl后缀的文件
                use: [           // 检测使用的loader，顺序是自下而上依次使用loader检测
                    'style-loader',  // 将js中css通过style标签添加到html文件中生效，所以打包后不会出现.css文件，而是在浏览器中出现style标签
                    'css-loader',     // 将css资源编译成commonjs的模块到js中，前提是js文件中引用了css文件
                    'stylus-loader'     // 将styl资源编译成css文件，前提是js文件中引用了styl文件
                ]
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
                        maxSize: 25 * 1024, // 25kb
                    }
                },
                // generator: {
                //     //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                //     filename: 'img/[name].[hash:6][ext]',
                //     //打包后对资源的引入，文件命名已经有/img了
                //     // publicPath: './'
                // },
            },


        ],


    },
    // 插件
    plugins: [],

    // 模式
    mode: 'development',
}