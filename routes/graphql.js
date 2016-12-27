var graphql = require('graphql').graphql
var GraphQLSchema = require('graphql').GraphQLSchema
var GraphQLObjectType = require('graphql').GraphQLObjectType
var GraphQLString = require('graphql').GraphQLString

let dummyData = {
  '1': 'leebyron',
  '2': 'enaqx',
  '3': 'schrockn',
  '4': 'andimarek'
}

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contributor: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (root, blah) => {
          return dummyData[blah.id];
        }
      }
    }
  })
})


var router = (server) => {
  server.get('/graph', (req, res, next) => {
    let instruction = 'POST GraphQL queries to' + server.url + '. Sample query: {contributor (id: "1")}';
    res.send(instruction)
    next()
  })

  server.post('/graph', (req, res, next) => {
    console.log('hi')
    graphql(schema, req.body).then((result) => {
      res.send(result)
    })
  })
}

module.exports = router