require('./check-versions')();
var config = require('./config');  //NodeJs会尝试加载package.json文件 package文件里面会指定：main 主文件入口  若果没有则尝试加载 文件夹下面的/index.js文件


//这里有个问题  process是全局函数？
console.log("配置运行环境前：",process.env.NODE_ENV);

console.log("环境判断: !process.env.NODE_ENV",!process.env.NODE_ENV);
// if (!process.env.NODE_ENV) {
//   process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// }

process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
console.log("配置运行环境后：",process.env.NODE_ENV);


console.log("主题配色设置");
var sys = require('sys');
var exec = require('child_process').exec;
// function puts(error, stdout, stderr) { sys.puts(stdout) }
// exec("node_modules/.bin/et", puts);

// executes "node_modules/.bin/et" 配置主题
child = exec("node_modules/.bin/et", function (error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var opn = require('opn');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf');


// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
    hot: true
  }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = {target: options}
  }
  app.use(proxyMiddleware(context, options))
});



// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);

app.use(staticPath, express.static('./static'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  var uri = 'http://localhost:' + port + "/home.html";
  console.log('Listening at ' + uri + '\n');

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
