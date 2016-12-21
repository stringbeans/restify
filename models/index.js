var Sequelize = require('sequelize')
var sequelize = new Sequelize('edvisor_dev', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})

var EUser = require('./euser.js')(sequelize)

module.exports = {
  EUser
}