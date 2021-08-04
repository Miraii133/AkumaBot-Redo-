/* eslint-disable require-jsdoc */
const Discord = require('discord.js');

const {jlptEmbedColor, jlptEmbedImage, jlptID} =
require('./jlptVariables');


// startMessage displays the embed that appears when you
// start the jlpt quiz
module.exports = {
  jlptStartMessage: function(message, roleIndex, channelId) {
    const roleTag = `<@&${jlptID[roleIndex]}>`;
    const userId = global.jlptUserMap.get(channelId);
    const convertuserId = '<@' + userId + '>';
    const messageEmbed = new Discord.MessageEmbed();
    messageEmbed
        .setTitle('')
        .setDescription(
            `**${convertuserId} started the ${roleTag} test!**`)
        .setImage(jlptEmbedImage[roleIndex])
        .setColor(jlptEmbedColor[roleIndex])
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
