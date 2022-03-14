// express dependency
const router = require('express').Router();

// controller methods
const { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought } = require('../../controllers/thought-controller')

// Routes
// GET all thoughts, POST a thought - /api/thoughts

// api/thoughts/userId
router
.route('/:userId')
.post(createThought);

// GET api/thoughts
router
.route('/')
.get(getAllThoughts);
// GET, PUT, DELETE api/thoughts/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// export
module.exports = router;