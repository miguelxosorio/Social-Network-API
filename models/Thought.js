// mongoose dependencies
const { Schema, model, Types } = require('mongoose');

// moment
const moment = require('moment');

// importing reaction model
const ReactionSchema = require('./Reaction');

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
        // associate reactions with thoughts - use ReactionSchema to validate data for a reaction
        // unlike the relationship between user and thought date, reactions will be nested directly into the thought's document and not referred to
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// virtuals
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;