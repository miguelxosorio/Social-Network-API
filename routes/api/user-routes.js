// express dependency
const router = require('express').Router();

// implement controller methods
const { createUser } = require('../../controllers/user-controller');

// set up routes
// we simply provide the name of the controller method as the callback
router
.route('/')
.post(createUser);

// export
module.exports = router;