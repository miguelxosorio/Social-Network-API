// Importing User and Thought model
const { User, Thought } = require('../models');

// Controller
const userController = {
    
    // Get all Users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    
    // Get a single user by its _id and populated thoought and friend data
    getUserById({ params }, res) { // Instead of accessing the entire req we destructured params out of it because that's the only data we need for this req to be fulfilled
        User.findOne({ _id: params.id })
        .then(dbUserData => {
            // if no user is found, error
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
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