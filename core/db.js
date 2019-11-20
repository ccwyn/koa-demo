const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
}= require('../config/config').database
const sequelize = new Sequelize(dbName,user,password,{
  dialect:'mysql',
  host,
  port,
  logging:true, // log
  timezone:'+08:00',// 时区
  define:{
   underscored:true, // 驼峰转下划线
  }
})

sequelize.sync({

}) // 创建到数据库
module.exports = {
  sequelize,
  tableName:user
}