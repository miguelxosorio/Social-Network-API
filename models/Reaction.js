// mongoose dep
const { Schema, model, Types } = require('mongoose')

// moment
const moment = require('moment');

// Schema only
const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            trim: true,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal =>
            moment(createdAtVal).format('MMMM Do YYYY [at] h:mm:ss a')
        }
    },
    {
        toJSON: {
            getters: true
        },
        // id: false
    }
);

// export
module.exports = ReactionSchema;
