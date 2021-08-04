const Discord = require('discord.js');
const {kanaInfoEmbed} = require('../../kanaInfoEmbed');
const {enumkanaCommand, enumkanaRooms} =
require('../Tests/kanaTestFolder/kanaVariables');

module.exports = {
  kanaInfo: function(message) {
    const messageEmbed = new Discord.MessageEmbed();

    messageEmbed
        .setColor(kanaInfoEmbed.embedColor)
        .setTitle(kanaInfoEmbed.embedTitle)
        .setImage(null);

    messageEmbed
    // What
        .addField(
            kanaInfoEmbed.embedWhatTitle,
            kanaInfoEmbed.embedWhatDesc)
    // How
        .addField(
            kanaInfoEmbed.embedHowTitle,
            kanaInfoEmbed.embedHowDesc)
    // Where
        .addField(
            kanaInfoEmbed.embedWhereTitle,
            kanaInfoEmbed.embedWhereDesc,
        );
    // Displays kana commands
    for (const [key, value] of Object.entries(enumkanaCommand)) {
      messageEmbed
          .addField(key.toUpperCase(), value, false);
    }
    // Displays kana room links
    for (const [key, value] of Object.entries(enumkanaRooms)) {
      const kanaRoomTag = `<#${value}>`;
      messageEmbed
          .addField(key.toUpperCase(), `${kanaRoomTag}`, true);
    }

    message.channel.send(messageEmbed);
  }
  ,
};

