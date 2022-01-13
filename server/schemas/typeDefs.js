// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Auth {
        token: ID!
        user: User
    }
        
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User

    }

    type Mutation {
        login(email: String!, password: String!): User //
        addUser(username: String!, email: String!, password: String!): User
    }
`;
// IN THE MUTATION NEED TO REVERT THE LOGIN AND ADDUSER MUTATIONS FROM ":USER" --> ": AUTH" for Authentication
// export the typeDefs
module.exports = typeDefs;