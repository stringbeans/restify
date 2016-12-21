var Sequelize = require('sequelize')
const EUser = function(sequelize) {
  var EUser = sequelize.define('user', {
    userId: {
      field: 'user_id',
      type: Sequelize.STRING, 
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING,
      field: 'firstname'
    },
    lastname: {
      type: Sequelize.STRING,
      field: 'lastname'
    }
  }, {
    timestamps: false,
    freezeTableName: true // Model tableName will be the same as the model name
  })

  return EUser
}

module.exports = EUser