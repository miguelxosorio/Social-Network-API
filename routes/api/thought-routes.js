// express dependency
const router = require('express').Router();

// controller methods
const { createThought } = require('../../controllers/thought-controller')

// Routes
// GET all thoughts, POST a thought - /api/thoughts

// api/thoughts/userId
router
.route('/:userId')
.post(createThought);


// export
module.exports = router;