// Importing User and Thought model
const { User, Thought } = require('../models');

// controller
const thoughtController = {

    // GET all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        })
    }, 

    // Get to get a single thought by its id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
    },
    
    // POST to create a new thought(don't forget to push the created thought's _id to the assoc user's thoughts array field)
    createThought() {

    },
    
    // PUT to update a thought by its _id
    updateThought() {

    },

    // delete to remove a thought by it's _id
    deleteThought() {

    }
};

// export
module.exports = thoughtController;