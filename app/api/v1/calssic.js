const Router = require('koa-router')
const router = new Router()
const {PositiveIntegerValidator} = require('../../validators/validator')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  const v = new PositiveIntegerValidator().validate(ctx)
  ctx.body = '成功'

  
  // if (true) {

  //   const error = new global.errs.ParameterException()
  //   throw error
  // }
  // ctx.body = {
  //   key: 'api1'
  // }
})
module.exports = router