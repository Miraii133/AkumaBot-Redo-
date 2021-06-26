/* eslint-disable require-jsdoc */

const {embedStyle} = require('./embedTexts');
const {kanaTestInfo} = require('./kanaVariables');

// startMessage displays the embed that appears when you
// start the kana quiz

module.exports = {
  startMessage: function(message, messageEmbed) {
    console.log('HELLOO');
    messageEmbed
        .setTitle(`${kanaTestInfo.testName} will start in 5 seconds..`)
        .setDescription(`
        **Taker: ${message.author.username}**`)
        .setColor(embedStyle.borderColor)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
