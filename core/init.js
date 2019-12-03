// 初始化管理器
const Router = require('koa-router');
const requireDirectory = require('require-directory') //自动加载路由

class InitManager {
  static initCore(app) {
    // 入口方法
    // console.log(process.cwd());
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
    InitManager.loadConfig()
  }

  static initLoadRouters() {
    // 模块，目录路径, 加载时候触发函数
    requireDirectory(module, `${process.cwd()}/app/api/`, {
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
    const errors = require(`${process.cwd()}/core/http-exception`)
    global.errs = errors
  }
  // 全局变量
  static loadConfig (){
    const configPath = require(`${process.cwd()}/config/config.js`)
    // console.log(configPath);
    // const config = require(configPath)
    global.config = configPath
  }
}
module.exports = InitManager
