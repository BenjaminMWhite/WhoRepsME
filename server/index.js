const express = require('express');

const { ApolloServer } = require(`apollo-server-express`);
const path = require('path');

// const { authMiddleware } = require('')

require('dotenv').config()

const { typeDefs } = require('./schemas');
// add resolvers to the object

const db = require('./config/connection');

const port = process.env.PORT || 3001
const app = express()
const server = new ApolloServer({
    typeDefs, mocks: true
    // resolvers,
    // context: authMiddleware,
});

// app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../00state/src/index.html'));
});


const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(typeDefs);
    // add the resolvers later