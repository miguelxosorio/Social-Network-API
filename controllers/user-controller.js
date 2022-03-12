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
    // Post a new user
    createUser() {
        User.create()
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
}

// export
module.exports = userController;