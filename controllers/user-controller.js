// Importing User and Thought model
const { User, Thought } = require('../models');

// Controller
const userController = {
    
    // Get all Users
    getAllUsers(req, res) {
        User.find({})
    },
    
    // Get a single user by its _id and populated thoought and friend data
    getUserById(req, res) {
        User.findOne()
    },
    
    // Post a new user - POST /api/users
    createUser({ body }, res) { //  we destructure the body out of the Express.js req object because we don't need to interface with any of the other data it provides.
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
    
    // Put user by its _id
    updateUser() {
        User.findOneAndUpdate()
    },
    
    // Delete user by its _id
    deleteUser() {
        User.findOneAndDelete()
    }
    
    // Bonus remove a user's associated thoughts when deleted - remove thoughts when user is deleted
};

// export
module.exports = userController;