
const Koa = require('koa');
const cors = require('koa2-cors');
const app = new Koa();
const template = require('koa-art-template');
const koaBody = require('koa-body');
const routers = require('./controller')
const koaStatic = require('koa-static');
const path = require('path');


app.use(koaStatic(path.resolve(__dirname, '../server/public')));//开放静态资源


app.use(cors())




//配置模板引擎
template(app,
  {
    root: path.resolve(__dirname, '../server/views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'//非生产环境，开启调试
  }
);


//配置koaBody  处理post请求
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024   
  },
  formLimit: 50 * 1024 * 1024,
  jsonLimit: 50 * 1024 * 1024,
  textLimit: 50 * 1024 * 1024
}));





//配置路由
for (const router in routers) {
  const r = routers[router];
  app.use(r.routes());
  app.use(r.allowedMethods());
}


//设置监听
app.listen(8888, () => {
  console.log('run server -- 8888')
});


