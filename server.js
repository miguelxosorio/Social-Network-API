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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// listens for connections on the specified host and port
app.listen(PORT, ()=> console.log(`🎯 Connected on localhost:${PORT}`));