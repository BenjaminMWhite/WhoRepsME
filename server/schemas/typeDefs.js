const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    user: Profile
}
type Profile {
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
    user: Profile
}
type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!, state: String!, city: String!, address: String!): Auth
    updateProfile(firstName: String, lastName: String, email: String, password: String, state: String, city: String, address: String): Profile
    login(email: String!, password: String!): Auth
}
`



module.exports = typeDefs;