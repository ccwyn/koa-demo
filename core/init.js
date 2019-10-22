// 初始化管理器
const Router = require('koa-router');
const requireDirectory = require('require-directory') //自动加载路由

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
  }

  static initLoadRouters() {
    // 模块，目录路径, 加载时候触发函数
    console.log(process.cwd())
    requireDirectory(module, `${process.cwd()}/api/`, {
      visit: filterRouter
    })

    function filterRouter(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
// 全局变量
  static loadHttpException (){
    const errors = require('../core/http-exception')
    global.errs =errors
  }

}
module.exports = InitManager
