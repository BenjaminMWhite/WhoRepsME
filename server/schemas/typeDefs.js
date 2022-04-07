const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mock {
    name: String
}
type Query {
    getMock: Mock
    }
`

module.exports = typeDefs;