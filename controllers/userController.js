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

       // find each current game by username  get
       findgame: async function (req, res) {
        
        // req.query = username
        // const user=username
        console.log(req)
        const user = await db.User.find(req.param, (err, user) => {
            if (err) return err;
            return user;
          });
          res.send(user.activeGames);
        }
    },



    // createUser  create new user - post

    // findUser get user by username - GET
    // would I use this 

    // updateUser if user dies, or eliminates target - if >10 kills - level up

    // getUser gets user profile for profile page.  show stats and games involved with




};