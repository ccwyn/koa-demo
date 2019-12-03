const bcrypt = require('bcrypt');
const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class User extends Model {
  static async verifyEmailPassword(email, plainPassword) {
    console.log(email);
    const user = await User.findOne({
      where: {
        email
      }
    })
    console.log(user,plainPassword, user.password);
    if (!user) {
      throw new global.errs.AuthFailed('账号不存在')
    }
    // user.password === plainPassword
    const correct = bcrypt.compareSync(
      plainPassword, user.password)
    if (!correct) {
      throw new global.errs.AuthFailed('密码不正确')
    }
    return user
  }

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
    set(val) {
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue(psw)
    }
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