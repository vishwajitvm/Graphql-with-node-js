const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql'); 

const UserType = new GraphQLObjectType({
    name: 'User', 
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        age: { type: GraphQLInt },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString } // Add this field manually
    })
});

var db =  require('./models') ;
const user = db.users ;

// CREATE DUMMY DATA
// Alternatively, we use a mutation to do so
const RootQuery = new GraphQLObjectType({
    name: 'Query', 
    fields: {
        userlist: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = user.findAll()
                return data;
            }
        }
    }
});


module.exports = new GraphQLSchema({ query: RootQuery })