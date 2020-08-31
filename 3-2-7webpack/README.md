1. 新建webpack.config.js
2. 安装一些必要的东西
   - html-webpack-plugin
   - webpack-dev-server

html
自动生成index.html，引入bundle.js


npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
npm install @babel/runtime -S

清除dist目录文件 复制静态文件
npm install clean-webpack-plugin copy-webpack-plugin -D

npm install optimize-css-assets-webpack-plugin terser-webpack-plugin mini-css-extract-plugin -D
