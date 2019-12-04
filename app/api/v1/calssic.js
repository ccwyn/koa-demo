const Router = require('koa-router')

const {PositiveIntegerValidator} = require('../../validators/validator')
const {
  Auth
} = require('../../../middlewares/auth')
const router = new Router({
  prefix:'/v1/classic'
})
router.get('/latest',new Auth().m, async(ctx, next) => {

  ctx.body = ctx.auth.uid
  // require('../../models/user')
  // const v = await new PositiveIntegerValidator().validate(ctx)
  // ctx.body = 'success'

  
  // if (true) {

  //   const error = new global.errs.ParameterException()
  //   throw error
  // }
  // ctx.body = {
  //   key: 'api1'
  // }
})
module.exports = router
