var euserRouter = require('./euser')
var graphqlRouter = require('./graphql')

var router = (server) => {
  server.get('/', (req, res, next) => {
    res.send('oh hi')
  })
  
  euserRouter(server)
  graphqlRouter(server)
}

module.exports = router