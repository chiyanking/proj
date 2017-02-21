// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../dist/home.html'),
    assetsRoot: path.resolve(__dirname, '../../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',//当页面访问的时候的路径
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8989,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '**/service/**': {
        target: 'http://localhost:8080/businessadmin',
        secure: false,
        changeOrigin: true,
        cookie :"",
        //获取服务器的JSESSIONID 代理服务器自己保存下载
        onProxyReq: function (proxyReq, req, res) {
          if (this.cookie){
            console.log("发送请求",this.cookie);
            proxyReq.setHeader('Cookie', this.cookie);
          }
        },
        onProxyRes: function (proxyRes, req, res) {
          var set_cookie = proxyRes.headers["set-cookie"];
          if (set_cookie) {
            var tem = set_cookie[0].substring(0, 43);
            if (tem){
              this.cookie = tem;
              console.log("返回请求",this.cookie);
            }
          }
        }
        // ,headers: {Cookie: "JSESSIONID=3386FEEF75D5B05CA2E9440C5B578F11"}
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
};
