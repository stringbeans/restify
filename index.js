require("babel-register");

var restify = require('restify'),
    port = process.env.PORT || 3030,
    router = require('./routes/index'),
    server = restify.createServer({
      name: 'Test'
    });

// server.use(restify.acceptParser(server.acceptable))
// server.use(restify.authorizationParser())
// server.use(restify.dateParser())
// server.use(restify.queryParser())
// server.use(restify.jsonp())
// server.use(restify.gzipResponse())
// server.use(restify.bodyParser())
// server.use(restify.throttle({
//   burst: 100,
//   rate: 50,
//   ip: true,
//   overrides: {
//     '192.168.1.1': {
//       rate: 0,        // unlimited
//       burst: 0
//     }
//   }
// }))
// server.use(restify.conditionalRequest())

// Use bodyParser to read body of posts request
server.use(restify.bodyParser())
// Call routes
router(server)

// Server listen initialize
server.listen(port, function (err) {
  if (err)
    console.error(err);
  else
    console.info('%s listening at <%s>', server.name, server.url);
});
 
 // Errors in production
if (process.env.environment == 'production'){
  process.on('uncaughtException', function (err) {
    console.error(JSON.parse(err));
  });
}
