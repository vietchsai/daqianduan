const Koa = require('koa');
const path = require('path');
const KoaBody = require('koa-body');
const json = require('koa-json');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const statics = require('koa-static');

// 实例化
const app = new Koa();
const router = require('./routes/routes');

app
  .use(KoaBody())
  .use(cors())
  .use(helmet())
  .use(statics(path.join(__dirname, '../public'), 'static'))
  .use(json({pretty: false, param: 'pretty'}))
  .use(router());

app.listen(3000);
