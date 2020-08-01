const Koa = require('koa');
const app = new Koa();

const middleware = function async(ctx, next){
  console.log("this is a middleware");
  console.log(ctx.request.path);
  // next(); // 在后面的中间件再执行
}


const middleware1 = function async(ctx, next){
  console.log("this is a middleware1");
  console.log(ctx.request.path);
  next(); // 在后面的中间件再执行
  console.log('this is middleware1 ending'); // 先进后出 回调执行
}

const middleware2 = function async(ctx, next){
  console.log("this is a middleware2");
  console.log(ctx.request.path);
  next(); // 在后面的中间件再执行
  console.log('this is middleware2 ending');
}

app
  .use(middleware1)
  .use(middleware2)
  .use(middleware);

app.listen(3001);
