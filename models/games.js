const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// connect and create database photoOps
mongoose.connect("mongodb://localhost/photoOps");

const gamePlay= new Schema(
    {
  // name of the game 
      game:String,
      // all the players in the game
      players:[Number],
      stats:Integer,
      // alive = yes (user still playing), 
      alive:Boolean,   
    });


    const Games = mongoose.model("Games", gamePlay);

    module.exports = Games;
