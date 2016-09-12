var webpack = require('webpack')
var baseDir = "./src/main/webapp";
var config = {
    // 制定打包的入口文件 index.jsx
    entry: './index.jsx',

    //配置打包结果 ，path定义了输出的文件夹，filename则定义了打包结果文件的名称
    output: {
        path: './',
        filename: 'index.js',
    },

    //设置服务器端口号为7777  inline：web-socket  -hot保存在内存中 index.js
    devServer: {
        inline: true,
        port: 7777,
        proxy: {
            '/service/**': {
                target: 'https://ssl1.tsign.cn',
                secure: false
            }
        }
    },

    /*    plugins: [new webpack.optimize.CommonsChunkPlugin(
     {
     name: "common",
     filename: "common.bundle.js",
     minChunks: Infinity
     }
     )],*/


    /*定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，
     以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。*/
    module: {
        loaders: [
            // {test: /\.css$/, loader: "style!css"},
            {test: /(\.css$)|(\.less$)/, loader: "style!css!less"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            // Bootstrap 3
            {test: /bootstrap[\\\/]js[\\\/]/, loader: "imports?jQuery=jquery"},
            {
                loader: 'babel',
                // Skip any files outside of your project's `src` directory
                // include: [
                //     path.resolve(__dirname, "src"),
                // ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                exclude: /node_modules/,

                //  es2015 就是ES6新特性   stage-0  就是es7 那些新特性
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
}
module.exports = config;
//可以使用 npm start 命令来启动服务。--hot 命令会在文件变化后重新载入，这样我们就不需要在代码修改后重新刷新浏览器就能看到变化。
//npm install babel-preset-stage-0 --save-dev