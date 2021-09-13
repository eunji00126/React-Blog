const typeDefs = `
    type User {
        id:String!
        name:String!
        provider:String!
    },
    type Query {
        user(id:String, provider:String):User
    },
    type Mutation {
        login(id:String!, name:String!, provider:String!):User
    }
`



export default typeDefs;