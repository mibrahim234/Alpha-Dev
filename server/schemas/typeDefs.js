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
        position: Developer
        }

    type Developer {
        preferredRole: String
        language: String
        length: String
        commitment: String
        startDate: String
    }

    type Company {
        preferredRole: String
        language: String
        length: String
        commitment: String
        startDate: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User

    }

    input DevDetails {
        preferredRole: String!,
        language: String!,
        length: String!, 
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