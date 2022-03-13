// Importing User and Thought model
const { User, Thought } = require('../models');

// controller
const thoughtController = {

    // GET all thoughts
    getAllThoughts() {

    }, 

    // Get to get a single thought by its id
    getThoughtById() {

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