const db = require("./models");

module.exports = {
    // find all users and sort by name
    findAll: function(req,res) {
        db.User
            .find(req.query)
            .sort(name)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // createUser  create new user - post

    // findUser get user by username - GET

    // updateUser if user dies, or eliminates target - if >10 kills - level up

    // getUser gets user profile for profile page.  show stats and games involved with

    


};