/* eslint-disable require-jsdoc */
const {kanaTestInfo} = require('./kanaVariables');

module.exports = {
  startMessage: function(message, messageEmbed) {
    messageEmbed
        .setDescription(
            // Quiz start message
            `**${message.author.username} started the ${kanaTestInfo.testName}**`)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
