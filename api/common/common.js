const Router =require('koa-router')
const router = new Router()
router.post('/common/api1',(ctx,next)=>{
  ctx.body = {
    key:'api1'
  }
})
module.exports =router
