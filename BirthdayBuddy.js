const TwitterBot = require("node-twitterbot").TwitterBot;
const config = require("./config");

// Include your access information below
var Bot = new TwitterBot(config);

Bot.tweet("@BabbyCanada we meet again");
