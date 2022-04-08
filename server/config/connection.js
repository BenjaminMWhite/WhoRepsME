const mongoose = require('mongoose');

const connection_string = process.env.CONNECTION_STRING;

mongoose.connect(connection_string)
    .then(() => console.log(`mongoDB connection IS working `))
    .catch((error) => console.error(`MongoDB not working up!:`, error.message));

module.exports = mongoose.connection;