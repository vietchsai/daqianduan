import Koa from 'koa';
import path from 'path';
import KoaBody from 'koa-body';
import json from 'koa-json';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import statics from 'koa-static';

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
