const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    user: User
}
type User {
    id: ID
    firstName: String
    lastName: String
    email: String
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
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;