module.exports = {
  environment:'dev',
  database:{
    dbName:'island',
    host:'localhost',
    port:3306,
    user:'root',
    password:'123'
  },
  security:{
    secretKey:"abcdefg",
    expiresIn:60*60*24*30
  },
  wx:{
    appid:'wx1a80d15c2556a4a0',
    appsecret:'78cbc6cf3e3f43b407a05ec014b81011',
    loginUrl:'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}