// mongoose dependencies
const { Schema, model } = require('mongoose');
// moment
const moment = require('moment');

// Schema Constructor
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal =>
            moment(createdAtVal).format('MMMM Do YYYY [at] h:mm:ss a')
        },
        username: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON: {
            getters: true
        }
    }
);


// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;