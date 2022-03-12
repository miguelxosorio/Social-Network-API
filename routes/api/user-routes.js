// express dependency
const router = require('express').Router();

// implement controller methods
const { createUser, getAllUsers, getUserById, updateUser } = require('../../controllers/user-controller');

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

// export
module.exports = router;