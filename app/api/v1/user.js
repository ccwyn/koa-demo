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
  // email password
  // token jwt
  // token 无意义的随机字符串
  // 携带数据
  // uid jwt
// console.log(v.get('body.email'));
// console.log(v.get('body.password2'));
  // 令牌获取 颁布令牌
  const user = {
      email: v.get('body.email'),
      password: v.get('body.password2'),
      nickname: v.get('body.nickname')
  }
console.log(user);
  await User.create(user)
  throw new global.errs.Success()

})
module.exports = router