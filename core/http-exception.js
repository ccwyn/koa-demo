
class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10001, code = 400) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class paramsException extends HttpException {
  constructor(msg = '服务器异常', errorCode = 10000){
    super()
    this.errorCode = errorCode
    this.code = 400
    this.msg = msg
  }
}
module.exports = {
  HttpException,
  paramsException
}