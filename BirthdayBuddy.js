const TwitterBot = require('node-twitterbot').TwitterBot;
const config = require('./config');

var Bot = new TwitterBot(config);

const Today = new Date();
const BirthdayDate = new Date('2019-01-16');
const Handle = '@BabbyCanada'

const names = [
	'Little Buddy', 'Little Fella', 'Lil\' Buddy', 'Lil\' Fella',
	'LB', 'LF', 'Pony', 'Specials', 'Billy', 'Little Billy',
	'Lil\' Billy', 'Dingus', 'Spence-a-bence', 'Little Big Kahuna',
	'Lil\' Big Kahuna', 'Spence', 'Spencey', 'Little Farter', 'Lil\' Farter',
  'Bill', 'Comrade'
];

function GetDaysUntilBirthday() {
  return parseInt((BirthdayDate.getTime() - Today.getTime()) / (24 * 3600 * 1000)) + 1;
}

function GetName() {
  let nameIndex = Math.floor(Math.random() * names.length);
  return names[nameIndex];
}

setInterval(function() {
  try {
    let DaysUntilBirthday = GetDaysUntilBirthday();
    let Name = GetName();
    let Days = DaysUntilBirthday === 1 ? 'day' : 'days';

    let TweetMessage = `${Handle}\n\n${Name}, Only ${DaysUntilBirthday} ${Days} until your 21st birthday!!\n\n#birthdaybuddy`

    Bot.tweet(TweetMessage);
  }
  catch (e) {
    console.log(e);
  }
}, 1440000);
