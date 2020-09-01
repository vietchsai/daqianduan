import Koa from 'koa';
import path from 'path';
import KoaBody from 'koa-body';
import json from 'koa-json';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import Compose from 'koa-compose';
import router from './routes/routes';
import compress from 'koa-compress';

// 实例化
const app = new Koa();

const isDev = (process.env.NODE_ENV !== "production");


const middleware = Compose([
  KoaBody(),
  cors(),
  helmet(),
  json({pretty: false, param: 'pretty'}),
  statics(path.join(__dirname, '../public'), 'static')
]);

// 生产环境增加压缩环节
if (!isDev){
  app.use(compress());
}

app.use(middleware);
app.use(router());
app.listen(3000);
