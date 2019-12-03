const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const InitManager = require('./core/init')
const catchError = require('./middlewares/exceptions')
require('./app/models/user')

const app = new Koa();
app.use(bodyParser()) // 处理post
app.use(catchError)
InitManager.initCore(app)





// app.use(router.allowedMethods());
// /*
//  * router.allowedMethods()作用： 这是官方文档的推荐用法,我们可以
//  * 看到 router.allowedMethods()用在了路由匹配 router.routes()之后,所以在当所有
//  * 路由中间件最后调用.此时根据 ctx.status 设置 response 响应头 
//  *
//  */

app.listen(3000);