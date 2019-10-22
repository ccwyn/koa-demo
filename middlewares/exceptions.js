/**
 * 全局错误函数
 * 捕获 处理错误 返回提示
 * @param {*} ctx 
 * @param {*} next 
 */
const { HttpException } = require('../core/http-exception')
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if(error instanceof HttpException){
      ctx.body = {
        error_code: error.errorCode,
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    }
  }
}

module.exports = catchError