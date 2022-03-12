// mongoose dependencies
const { Schema, model, Types } = require('mongoose');

// Schema Constructor
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'You must enter a username',
            trim: true
        },
        email: {
            type: String,
            required: 'You must enter a valid email',
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

// add virtuals here
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;