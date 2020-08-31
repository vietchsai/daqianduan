/*!
 * gulp 自动化配置
 * CreateTime: 2020/08/19
 * Author: DaiJiyu
 */

// 引入必要功能
const { src, dest, series, watch, parallel } = require('gulp');
// 定义开发/生产环境
const environment = process.env.NODE_ENV || 'development';
// const environment = process.env.NODE_ENV || 'production';

/* 开发环境使用库 */
// 引入删除文件库
const del = require('rimraf');
// babel 转换js为ES5
const babel = require('gulp-babel');
// sass处理
const sass = require('gulp-sass');
// postcss 自动增加浏览器前缀
const postcss = require('gulp-postcss');
// postCss 的 AutoPreFixer 插件
const autoPrefixer = require('gulp-autoprefixer');

/* 发布环境使用库 */
// 文件压缩库
const htmlClean = require('gulp-htmlclean');
const cssClean = require('gulp-clean-css');
// 删除注释和调试信息
const removeComments = require('gulp-strip-debug');
// 压缩混淆js
const uglifyjs = require('gulp-uglify');

// 创建服务器环境插件 支持热更新
const connect = require("gulp-connect");
// 代理中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

// 根据自己开发的实际需求自行设置
// src 放开发文件
// dist 是打包压缩后的导出目录
// static 是静态资源文件
const folder = {
  src: "src/",
  dist: 'dist/',
  static: 'static/'
}


// 删除dist目录中的内容
function clean(cb) {
  del('./dist', cb)
}

// 处理静态资源文件
function staticFiles(cb){
  // static目录下的文件夹及文件
  const step = src(folder.static + "**/*")
    .pipe(dest(folder.dist)) // dest 输出目录
    .pipe(connect.reload());
  cb();
}

// 处理html文件
function html(cb){
  const step = src(folder.src + "**/*.html")
  if (environment === 'production'){
    step.pipe(htmlClean());
  }
  step.pipe(dest(folder.dist))
    .pipe(connect.reload());
  cb();
}

// 处理css文件
function css(cb){
  const step = src(folder.src + "css/*")
    .pipe(sass())
    .pipe(postcss([autoPrefixer]));
  if (environment === 'production'){
    step.pipe(cssClean())
  }
  step.pipe(dest(folder.dist + "css/"))
    .pipe(connect.reload())
  cb();
}

// 处理js文件
function js(cb) {
  const step = src(folder.src + "js/*")
    .pipe(babel({
      presets: ['env']
    }))
  if (environment === 'production'){
    step.pipe(removeComments())
      .pipe(uglifyjs())
  }
  step.pipe(dest(folder.dist + "js/"))
    .pipe(connect.reload())
  cb();
}


function server(cb){
  connect.server({
    host: 'localhost',
    port: 8888,
    root: 'dist',
    livereload: true,
    directoryListing: {
      enable: true,
      path: './'
    },
    middleware: function(connect, opt) {
      return [
        createProxyMiddleware('/api',  {
          target: 'http://localhost:8000',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': '/',
          },
        })
      ]
    }
  })
  cb();
}

function watcher(cb){
  watch(folder.src + "**/*.html",html);
  watch(folder.src + "css/*",css);
  watch(folder.src + "js/*",js);
  cb();
}


//  导出为公开任务
exports.default = series(
  clean,
  parallel(
    staticFiles,
    html,
    css,
    js
  ),
  server,
  watcher
);
