/* eslint-disable require-jsdoc */
// startMessage displays the embed that appears when you
// start the kana quiz
const {kanaTestInfo} = require('./kanaVariables');
module.exports = {
  startMessage: function(message, messageEmbed) {
    messageEmbed
        .setDescription(`
        **${message.author.username} started the ${kanaTestInfo.testName}**`)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
