/* eslint-disable require-jsdoc */
const Discord = require('discord.js');

const {jlptembedColor, jlptembedImage, jlptroleName} =
require('./jlptVariables');


// startMessage displays the embed that appears when you
// start the jlpt quiz
module.exports = {
  jlptStartMessage: function(message, roleIndex, channelId) {
    const messageEmbed = new Discord.MessageEmbed();
    const roleTag = `<@&${jlptroleName[roleIndex]}>`;
    const userId = global.userMap.get(channelId);
    const convertuserId = '<@' + userId + '>';

    messageEmbed
        .setTitle('')
        .setDescription(
            `**${convertuserId} started the ${roleTag} test!**`)
        .setImage(`${jlptembedImage[roleIndex]}`)
        .setColor(jlptembedColor[roleIndex])
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
