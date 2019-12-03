const Router = require('koa-router')

const {RegisterValidator} = require('../../validators/validator')
const {User} = require('../../models/user')
const router = new Router({
  prefix:'/v1/user'
})


/**
 * 用户注册
 * 参数：email password1 nickname password2
 */
router.post('/register',async(ctx)=>{
  const v = await new RegisterValidator().validate(ctx)

  const user = {
      email:v.get('body.email'),
      password:v.get('body.password2'),
      nickname:v.get('body.nickname'),
  }
  console.log(user);
  const r = await User.create(user)

})
module.exports = router