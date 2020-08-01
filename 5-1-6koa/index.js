// 简单node服务
const Koa = require("koa");
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const json = require('koa-json');

const app = new Koa();
const router = new Router();

// 自定义路径前缀
router.prefix('/api');

router.get('/', ctx => {
  console.log(ctx.headers.role);
  ctx.body = 'Hello World!';
});

/*------  作业部分  -------*/
// 定义post接口地址
router.post('/user', async (ctx) => {
  // 获取请求参数
  const { body } = ctx.request;
  if (typeof body.name === "undefined" || typeof body.email === "undefined" ||
    body.name === "" || body.email === ""){
    ctx.body = {
      code: 404,
      msg: "name与email不得为空"
    };
  }else if (typeof ctx.headers.role === "undefined" || ctx.headers.role !== "admin"){
    ctx.status = 401;
    ctx.body = {
      code: 401,
      msg: "unauthorized post"
    };
  }else{
    ctx.body = {
      code: 200,
      msg: "上传成功",
      data: {
        ...body
      }
    };
  }
});
/*------  作业部分  -------*/

router.get('/async', async (ctx) => {
  let result = await new Promise((resolve)=>{
    setTimeout(function(){
      resolve('Hello world 2s later!');
    },2000);
  })
  ctx.body = result;
});


router.get('/api', ctx => {
  console.log(ctx.request);
  ctx.body = 'Hello Api!';
});

router.post('/post', async (ctx)=>{
  // ES6 解构赋值
  let {body} = ctx.request;
  console.log(body);
  ctx.body = {
    ...body,
    code: "200"
  }
});

// 1. request, method, respond
// 2. api url => function, router
// 3. ctx, async


// app.use(async ctx => {
//     console.log(ctx);
//     ctx.body = 'Hello World!';
// });

app
  .use(koaBody())
  .use(cors())
  .use(json({pretty: false, param: 'pretty'}))
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);

