// mongoose dependencies
const { Schema, model } = require('mongoose');

// Schema Constructor
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            Trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/.+\@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true, // telling the Schema it can use virtuals
            getters: true   // telling the Schema that it can use a getter function we've specified
        },
        id: false           // We set id to false because this is a virtual that Mongoose returns, and we don’t need it
    }
);

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;