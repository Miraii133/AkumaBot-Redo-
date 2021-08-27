/* eslint-disable require-jsdoc */

const Discord = require('discord.js');
const {kanaEmbedStyle} = require('../embedTexts');
const {kanaTestInfo} = require('./kanaVariables');

// startMessage displays the embed that appears when you
// start the kana quiz
module.exports = {
  kanaStartMessage: function(message, channelId) {
    const convertuserId = '<@' + message.author.id + '>';
    const messageEmbed = new Discord.MessageEmbed();
    messageEmbed
        .setTitle(`${kanaTestInfo.testName} is starting..`)
        .setDescription(`
        **User taking: ${convertuserId}**`)
        .setColor(kanaEmbedStyle.borderColor)
        .setImage(null)
        .setTimestamp();
    message.channel.send({embeds: [messageEmbed]});
  },
};
