const Koa = require('koa');
const KoaBody = require('koa-body');
const json = require('koa-json');
const cors = require('@koa/cors');

// 实例化
const app = new Koa();
const router = require('./routes/routes');

app
  .use(KoaBody())
  .use(cors())
  .use(json({pretty: false, param: 'pretty'}))
  .use(router());

app.listen(3000);
