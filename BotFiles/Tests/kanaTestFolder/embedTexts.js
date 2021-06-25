let convertuserId;
const {converttag} = require('./scanWinner');
const cheatEmbed = {
  title: `Someone else passed the test!
    You need to take the test again!`,
  description: `**${convertuserId} started the test but ${converttag}
passed it first! Please do not interfere with the
JLPT role test of others!**`,
};

const winEmbed = {
  title: '**Congratulations!**',
  description: `${convertuserId} passed the Kana test!`,
};

module.exports = {cheatEmbed, winEmbed};
