// express dependency
const router = require('express').Router();

// controller methods
const { createThought, getAllThoughts, getThoughtById, updateThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thought-controller')

// Routes
// GET all thoughts, POST a thought - /api/thoughts

// api/thoughts/:userId
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

// POST /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtId/reactions')
.post(addReaction)

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

// export
module.exports = router;