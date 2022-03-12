// express dependency
const router = require('express').Router();

// implement controller methods
const { createUser, getAllUsers } = require('../../controllers/user-controller');

// set up routes
// we simply provide the name of the controller method as the callback
router
.route('/')
.get(getAllUsers)
.post(createUser);

// export
module.exports = router;