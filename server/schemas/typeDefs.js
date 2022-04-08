const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mock {
    name: String
}
type Query {
    getMock: Mock
    }

type User {
    id: ID
    name: String
    email: String
    password: String
    state: String
    city: String
    address: String
}
type Auth {
    token: ID
    user: User
}
type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, state: String!, city: String!, address: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, state: String, city: String, address: String): User
}
`

module.exports = typeDefs;