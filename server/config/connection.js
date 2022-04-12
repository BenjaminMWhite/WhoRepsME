const mongoose = require('mongoose');

// const connection_string = process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/WhoRepsME'

// mongoose.connect(connection_string)
//     .then(() => console.log('mongoDB connection IS working '))
//     .catch((error) => console.error('MongoDB not working up!:', error.message));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/WhoRepsME',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
  

module.exports = mongoose.connection;