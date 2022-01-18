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
        position: String
    }

    input DevDetails {
        perferredRole: String,
        language: String,
        availability: String, 
        commitment: String, 
        startDate: String
    }

    input CompanyDetails {
        preferredRole: String,
        language: String,
        length: String,
        commitment: String,
        startDate: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateDevUser(id: ID!, input: DevDetails): User
        updateCompanyUser(id: ID!, input: CompanyDetails): User
    }
`;

// export the typeDefs
module.exports = typeDefs;