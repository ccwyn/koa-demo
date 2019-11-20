const {sequelize} = require('../../core/db')
const {Sequelize,Model} = require('sequelize')

class User extends Model {

}

User.init({
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: {
      type: Sequelize.STRING(128),
      unique: true
  },
  password: {
      //扩展 设计模式 观察者模式
      //ES6 Reflect Vue3.0 
      type: Sequelize.STRING,

  },
  openid: {
      type: Sequelize.STRING(64),
      unique: true
  },
}, {
  sequelize,
  tableName: 'user'
})

module.exports = {
  User
}