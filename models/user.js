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
      playerLevel:String,
      adOns:[String],
      date: new Date(Date.now()),
      target:Integer,
      // does aciveGames need to be a [String] or [Interger]
      activeGames:[String],
    });
  

    const User = mongoose.model("User", eachUser);

    module.exports = User;
