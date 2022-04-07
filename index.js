const express = require('express')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()

app.get(`/`, (req, res) => {
    res.send(`welcome to our site boi`)
})

const connection_string = process.env.CONNECTION_STRING

const port = process.env.PORT || 3001

app.listen(3000, () => {
    console.log(`server running on port 3000`)
})

mongoose.connect(connection_string, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`mongoDB connection NOT fuked `))
.catch((error) => console.error(`MongoDB FUKED up!:`, error.message))