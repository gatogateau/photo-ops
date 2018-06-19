const db = require("../models");

// define methods for the gamesController

module.exports = {
    // find all games and sort by name
    // test these 
    findAll: function(req, res) {
        db.Games
        .find(req.query)
        .sort(game)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // find each game by username

    // find each game by name

    // find each current game
    
    
};