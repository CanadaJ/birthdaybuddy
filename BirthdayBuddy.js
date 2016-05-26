const TwitterBot = require("node-twitterbot").TwitterBot;
const config = require("./config");

var Bot = new TwitterBot(config);

Bot.tweet("@BabbyCanada we meet again");
