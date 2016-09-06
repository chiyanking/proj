var config = {
    // 制定打包的入口文件  main.js
    entry: './main.js',

    //配置打包结果 ，path定义了输出的文件夹，filename则定义了打包结果文件的名称
    output: {
        path: './',
        filename: 'index.js',
    },

    //设置服务器端口号为7777  inline：不输出文件  保存在 内存中index.js
    devServer: {
        inline: true,
        port: 7777
    },

    /*定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，
     以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。*/
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }

}
module.exports = config;
//可以使用 npm start 命令来启动服务。--hot 命令会在文件变化后重新载入，这样我们就不需要在代码修改后重新刷新浏览器就能看到变化。
