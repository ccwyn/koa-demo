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
    // 区分全局和开发环境
    const isHttpException = error instanceof HttpException
    const isDev = global.config.environment === 'dev'
    
    if(isDev && !isHttpException){
        throw error
    }
    
    if(isHttpException){
      ctx.body = {
        error_code: error.errorCode,
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    }else {
      ctx.body = {
        error_code: '未知异常',
        msg: error.msg,
        request: `${ctx.method} ${ctx.path}`
      }
    }
  }
}

module.exports = catchError