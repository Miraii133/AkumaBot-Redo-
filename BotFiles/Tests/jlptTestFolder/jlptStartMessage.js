/* eslint-disable require-jsdoc */

const {jlptID, embedColor, embedImage} = require('./jlptVariables');


// startMessage displays the embed that appears when you
// start the jlpt quiz
module.exports = {
  jlptStartMessage: function(message, messageEmbed, roleIndex) {
    const roleTag = '<@&' + jlptID[roleIndex] + '>';
    messageEmbed
        .setTitle(`${roleTag}will start in 5 seconds..`)
        .setDescription(`
        **Taker: ${message.author.username}**`)
        .setImage(`${embedImage[roleIndex]}`)
        .setColor(embedColor[roleIndex])
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
