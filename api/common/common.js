const Router = require('koa-router')
const router = new Router()
const {HttpException,paramsException} = require('../../core/http-exception')

router.post('/common/api1/:id/test', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body

  if (true) {
    //  const error =new Error('错误')
    //  error.error_code = 10001
    //  error.error_status = 400
    //  error.request_url = `${ctx.method} ${ctx.path}`
    // const error = new paramsException()
    const error = new global.errs.paramsException()
    throw error
  }
  ctx.body = {
    key: 'api1'
  }
})
module.exports = router
