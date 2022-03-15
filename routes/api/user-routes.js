// express dependency
const router = require('express').Router();

// implement controller methods
const { createUser, getAllUsers, getUserById, updateUser, deleteUser, addFriend } = require('../../controllers/user-controller');

// set up routes
// we simply provide the name of the controller method as the callback

// GET all users and POST at /api/users routes
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one user, PUT, and DELETE at /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// api/users/:userId/friends/:friendId
router
.route('/:id/friends/:friendId')
.post(addFriend)

// export
module.exports = router;