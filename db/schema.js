const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI || port,
//   {
//     useMongoClient: true
//   }
// );

const eachUser = 
  {
    username: {type:String, default: "username"},
    password: {type:String, default: "password"}, 
    kills:Integer,
    deaths:Integer,
    gamesPlayed:Integer,
    adOns:[String],
    date: new Date(Date.now()),
    target:Integer,
    activeGames:[Number],
  };

  const gamePlay=
  {
// name of the game 
    game:String,
    // all the players in the game
    players:[Number],
    stats:Integer,
    // alive = yes (user still playing), 
    alive:Boolean,   
  };