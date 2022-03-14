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
    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId }, // upon creating a thought, it belongs to a user
                { $push: { thoughts: _id } }, // push method to add the thought's _id to a specific user, adds the data to the thoughts array 
                { new: true } // passed the option of new: true, we're receiving back the updated user data (the user with the new thought included)
            );
        })
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No User found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    
    // PUT to update a thought by its _id
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete to remove a thought by it's _id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(404).json(err));
    }
};

// export
module.exports = thoughtController;