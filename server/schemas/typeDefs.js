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

    input DevDetails {
        perferredRole: String!,
        language: String!,
        availability: String!, 
        commitment: String!, 
        startDate: String!
    }

    input CompanyDetails {
        preferredRole: String!,
        language: String!,
        length: String!,
        commitment: String!,
        startDate: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateDevUser(position: DevDetails): User
        updateCompanyUser(position: CompanyDetails): User
    }
`;

// export the typeDefs
module.exports = typeDefs;