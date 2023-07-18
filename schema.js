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
        phone: { type: GraphQLInt } 
    })
});

// CREATE DUMMY DATA
// Alternatively, we use a mutation to do so
const RootQuery = new GraphQLObjectType({
    name: 'Query', 
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = [
                    {
                        id: 12,
                        name: 'vishwajit',
                        email: 'vishwa@gmail.com',
                        phone: 89203521
                    },
                    {
                        id: 14,
                        name: 'rajesh',
                        email: 'rajesh@gmail.com',
                        phone: 454545412
                    }
                ];
                return data;
            }
        }
    }
});


module.exports = new GraphQLSchema({ query: RootQuery })