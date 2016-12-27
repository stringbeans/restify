// var userController = require('../controllers/userController')
var EUser = require('../models').EUser

var usersRouter = (server) => {
  // List all users
  server.get('/euser', (req, res, next) => {
    EUser.findAll()
      .then((users) => {
        res.send(users)
      })
    // next(null, {
    //   hey: 'hi'
    // })
    // userController.index().then(function(user) {
    //   res.send(user);
    // }).catch(function (err){
    //   next(err)
    // })
  })

  server.post('/euser', (req, res, next) => {
    console.log('hi')
    next()
  })
}

module.exports = usersRouter