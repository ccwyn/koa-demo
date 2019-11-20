const {sequelize} = require('../../core/db')
const {Sequelize,Model} = require('sequelize')

class User extends Model {

}

User.init({
  // 主键：数字 查询性能好
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true, // 设置为主键
    autoIncrement:true// 自增长
  },
  nickname:Sequelize.STRING,
  email:Sequelize.STRING,
  password:Sequelize.STRING,
  openid:{
    type:Sequelize.STRING(64),
    unique:true,
  }
},{sequelize})