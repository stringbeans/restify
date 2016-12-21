var euserRouter = require('./euser')

var router = (server) => {
  server.get('/', (req, res, next) => {
    res.send('oh hi')
  })
  
  euserRouter(server)
}

module.exports = router