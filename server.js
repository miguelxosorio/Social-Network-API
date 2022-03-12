// dependencies
const express = require('express');
const mongoose = require('mongoose');

// express(); in app variable
const app = express();
// PORT - env or 3001;
const PORT = process.env.PORT || 3001;

// expressJS built in middleware 
app.use(express.json()); // convert request body to JSON
app.use(express.urlencoded({ extended: true })); // also converts request body to JSON  - extended true = post nested objects

// use api routes we set up 
app.use(require('./routes'));

// mongoose connects when app is started - tells Mongoose which database we want to connect to.
// MongoDB will find and connect to the database if it exists or create the database if it doesn't.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// use this to log mongo queries being executed!
// enable logging collection methods + arguments to the console/file
// 'debug': If true, prints the operations mongoose sends to MongoDB to the console
mongoose.set('debug', true);

// listens for connections on the specified host and port
app.listen(PORT, ()=> console.log(`🎯 Connected on localhost:${PORT}`));