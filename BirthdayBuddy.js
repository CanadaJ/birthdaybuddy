"use strict"
const TwitterBot = require('node-twitterbot').TwitterBot;
let Config = undefined;

if (process.env.consumer_secret === undefined) {
	Config = require('./config');
}

var Bot = new TwitterBot({
	"consumer_secret": process.env.consumer_secret || Config.consumer_secret,
	"consumer_key": process.env.consumer_key || Config.consumer_key,
	"access_token": process.env.access_token || Config.access_token,
	"access_token_secret": process.env.access_token_secret || Config.access_token_secret
});

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const Today = new Date();
const BirthdayDate = new Date('2019-01-16');
const Handle = '@babycanada7'

const names = [
	'Little Buddy', 'Little Fella', 'Lil\' Buddy', 'Lil\' Fella',
	'LB', 'LF', 'Pony', 'Specials', 'Billy', 'Little Billy',
	'Lil\' Billy', 'Dingus', 'Spence-a-bence', 'Little Big Kahuna',
	'Lil\' Big Kahuna', 'Spence', 'Spencey', 'Little Farter', 'Lil\' Farter',
  'Bill', 'Comrade'
];

function GetDaysUntilBirthday() {
  let bdayDate = BirthdayDate.getTime();
  let todayDate = Today.getTime();

  return Math.ceil((bdayDate - todayDate) / _MS_PER_DAY) + 1;
}

function GetName() {
  let nameIndex = Math.floor(Math.random() * names.length);
  return names[nameIndex];
}

function sendBirthdayTweet() {
	try {
		let DaysUntilBirthday = GetDaysUntilBirthday();
		let Name = GetName();
		let Days = DaysUntilBirthday === 1 ? 'day' : 'days';

		let TweetMessage = '';

		if (DaysUntilBirthday === 0) {
			TweetMessage = `${Handle}\n\nTHIS IS A MUNGO ALERT\n\n${Name} IS NOW A MUNGO.\n\nCongrats, and happy birthday! #birthdaybuddy`;
			Bot.tweet(TweetMessage);
			return;
		}

		TweetMessage = `${Handle}\n\n${Name}, Only ${DaysUntilBirthday} ${Days} until your 21st birthday!!\n\n#birthdaybuddy`

		Bot.tweet(TweetMessage);
	} catch (e) {
		console.log(e);
	}
}

sendBirthdayTweet();
setInterval(sendBirthdayTweet, 86400000);
