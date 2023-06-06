const os = require('os')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin');    // 检查代码规范插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html打包插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // 插件封装样式css打包成一个文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 插件压缩打包的css文件
const TerserWebpackPlugin = require("terser-webpack-plugin");  // 默认是使用该插件单线程压缩js代码，如果需要多线程压缩需要进行配置
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); // 插件无损优化压缩图片

// 获取系统cpu的核数，基于该数字启动对应数量的线程同时进行webpack打包
const threads = os.cpus().length;

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
    // 单入口，打包输出一个js文件
    // entry: './src/main.js',
    // 多文件入口，打包输出多个js文件
    entry: {
        main: "./src/main.js",
        sum: "./src/js/sum.js",
        count: "./src/js/count.js",
    },
    // 输出
    output: {
        // 打包后的文件输出目录，需要使用绝对路径
        path: path.resolve(__dirname, '../dist'),
        // 打包后的文件名称，[name表示原文件名称]
        filename: '[name].js',
        // 自动清空上次打包的内容
        // 在打包前自动清空path指定的打包目录下全部内容，再打包输出到path目录下
        clean: true,
    },

    // 加载器
    module: {
        // 每个loader的配置
        rules: [
            {
                // onnOf代表每个文件只能被一个loader处理，避免重复的loader检查文件是否可以处理，提高weback打包速度
                oneOf: [
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
                        // include和exclude两个配置只能写一个
                        // include: path.resolve(__dirname,"../src/"), // 只处理src目录下的文件，其他文件babel都不处理
                        exclude: /(node_modules)/, // 排除node_modules文件不处理，而其他文件babel都处理
                        use: [
                            {
                                loader: 'thread-loader',  // thread-loader开启多线程处理babel编译
                                options: {
                                    works: threads,   //  设置线程数量  
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true, // 开启babel缓存，缓存打包的文件，在webpack打包时没有修改的js代码从缓存取无需二次打包
                                    cacheCompression: false // 关闭缓存文件压缩
                                }
                            }
                        ],
                    }
                ]

            }

        ],


    },
    // 插件使用，注意插件需要使用模块化引入
    plugins: [
        // eslint插件检查js和JSX
        new ESLintPlugin({
            // 检查哪些文件的代码，如下是检查当前目录下的src目录下的所有文件
            context: path.resolve(__dirname, '../src'),
            // 排除检查哪些目录下的文件代码检查，默认是排除node_modules的依赖文件代码检查
            exclude: "node_modules",
            // 开启缓存，在webpack打包检查代码时只根据缓存与源码比较只检查有修改文件代码的检查，提高打包速度
            cache: true,
            // 缓存存放目录
            cacheLocation: path.resolve(
                __dirname,
                "../node_modules/.cache/eslintcache"
            ),
            // 开启多线程处理eslint插件检查js和JSX
            threads: threads,
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

        // 插件无损优化压缩图片
        new ImageMinimizerPlugin({
            minimizer: {
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 5 }],

                        [
                            "svgo",
                            {
                                plugins: [
                                    "preset-default",
                                    "prefixIds",
                                    {
                                        name: "sortAttrs",
                                        params: {
                                            xmlnsOrder: "alphabetical",
                                        },
                                    },
                                ],
                            },
                        ],
                    ],
                }
            },
        }),

    ],

    // 开发热启动，不会生产打包后的资源文件，而是在直接打包在内存中运行
    // devServer: {
    //     host: "localhost",  //启动服务器ip
    //     port: "3000",       //启动服务器的端口
    //     open: true          //是否自动打开浏览器
    // },

    optimization: {
        // 开发环境下启用css打包成单独的文件
        // minimize: true,

        minimizer: [
            // 插件压缩打包的css文件
            new CssMinimizerPlugin(),

            // 配置多线程加快webpack压缩js代码打包
            new TerserWebpackPlugin({
                parallel: threads
            })
        ],

        // 代码分割配置
        splitChunks: {
            chunks: "all",
            // 以下是默认值
            // minSize:20000,  // 分割代码最小的大小,默认是20kb
            // minRemainingSize: 0, // 确保提取的文件大小的最小值为0
            // minChunks:1,//提取的文件至少被引用的次数
            // maxAsyncRequests:10, // 按需加载时并行加载的文件的最大数量
            // maxInitialRequests: 30, //入口js文件最大并行请求数量
            // enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
            // cacheGroups:{  // 组，哪些模块要打包到一个组
            //     defaultVendors:{  //组名
            //         test:/[\\/]node_modules[\\/]/, //需要打包到一起的模块
            //         priority: -10, //权重（越大越高）
            //         reuseExistingChunk:true,//如果当前chunk包含已从bundle中拆分出的模块，则它将被重用，而不是生成新的模块
            //     },
            //     default:{ //其他没有写的配置会使用上面的默认值
            //         minChunks:2, //这里的minChunk权重更大
            //         priority: -20, //权重（越大越高）
            //         reuseExistingChunk:true,//如果当前chunk包含已从bundle中拆分出的模块，则它将被重用，而不是生成新的模块
            //     },
            // },
            // 修改配置
            cacheGroups: {  // 组，哪些模块要打包到一个组
                default: { //其他没有写的配置会使用上面的默认值
                    minSize:0, // 分割代码最小的大小
                    minChunks: 2, //这里的minChunk权重更大
                    priority: -20, //权重（越大越高）
                    reuseExistingChunk: true,//如果当前chunk包含已从bundle中拆分出的模块，则它将被重用，而不是生成新的模块
                },
            },
        }

    },

    // 模式 development是开发模式，production是生产模式 
    // 使用开发模式打包不会压缩打包后的文件，而使用生产模式打包会压缩打包后的代码
    mode: 'production',

    // 配置sourceMap来在编译打包后生成map文件存储源代码和打包后的代码行和列的映射关系，编译代码出现问题后快速定位到源代码
    // 注意source-map用于生产环境下
    devtool: 'source-map',
}