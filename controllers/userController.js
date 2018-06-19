const db = require("./models");

module.exports = {
    // find all users and sort by name
    findAll: function(req,res) {
        db.User
            .find(req.query)
            .sort(name)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }


};