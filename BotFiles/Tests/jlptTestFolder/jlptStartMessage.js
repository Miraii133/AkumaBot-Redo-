/* eslint-disable require-jsdoc */

const {embedColor, embedImage, jlptroleName} =
require('./jlptVariables');


// startMessage displays the embed that appears when you
// start the jlpt quiz
module.exports = {
  jlptStartMessage: function(message, messageEmbed, roleIndex, channelId) {
    const roleTag = `<@&${jlptroleName[roleIndex]}>`;
    const userId = global.userMap.get(channelId);
    const convertuserId = '<@' + userId + '>';
    messageEmbed
        .setDescription(
            `**${convertuserId} started the ${roleTag} test!**`)
        .setImage(`${embedImage[roleIndex]}`)
        .setColor(embedColor[roleIndex])
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
