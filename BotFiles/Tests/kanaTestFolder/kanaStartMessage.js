/* eslint-disable require-jsdoc */


const {kanaEmbedStyle} = require('../embedTexts');
const {kanaTestInfo} = require('./kanaVariables');

// startMessage displays the embed that appears when you
// start the kana quiz
const Discord = require('discord.js');
module.exports = {
  kanaStartMessage: function(message) {
    const messageEmbed = new Discord.MessageEmbed();
    messageEmbed
        .setTitle(`${kanaTestInfo.testName} is starting..`)
        .setDescription(`
        **User taking: ${message.author.username}**`)
        .setColor(kanaEmbedStyle.borderColor)
        .setImage(null)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
