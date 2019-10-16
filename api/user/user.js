const Router =require('koa-router')
const router = new Router()
router.get('/user/api1',(ctx,next)=>{
  ctx.body = {
    key:'user'
  }
})
module.exports =router