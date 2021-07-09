/* eslint-disable require-jsdoc */


const {kanaEmbedStyle} = require('../embedTexts');
const {kanaTestInfo} = require('./kanaVariables');

// startMessage displays the embed that appears when you
// start the kana quiz

module.exports = {
  startMessage: function(message, messageEmbed) {
    messageEmbed
        .setTitle(`${kanaTestInfo.testName} will start in 5 seconds..`)
        .setDescription(`
        **Taker: ${message.author.username}**`)
        .setColor(kanaEmbedStyle.borderColor)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
