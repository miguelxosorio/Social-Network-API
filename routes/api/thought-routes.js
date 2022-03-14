// express dependency
const router = require('express').Router();

// controller methods
const { createThought, getAllThoughts } = require('../../controllers/thought-controller')

// Routes
// GET all thoughts, POST a thought - /api/thoughts

// api/thoughts/userId
router
.route('/:userId')
.post(createThought);

// GET api/thoughts
router
.route('/')
.get(getAllThoughts)

// export
module.exports = router;