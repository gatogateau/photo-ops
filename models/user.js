const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// connect and create database photoOps
mongoose.connect("mongodb://localhost/photoOps");

const eachUser = new Schema(
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
    });
  

    const Games = mongoose.model("Games", gamePlay);

    module.exports = Games;
