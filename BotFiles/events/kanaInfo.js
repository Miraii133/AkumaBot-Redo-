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
    // Displays kana command
    // no need for-of loop, only 1 command list
    messageEmbed
        .addField('Command'.toUpperCase(),
            `${enumkanaCommand.command1}`, false);
    // Displays kana room links
    for (const [key, value] of Object.entries(enumkanaRooms)) {
      const kanaRoomTag = `<#${value}>`;
      messageEmbed
          .addField(key.toUpperCase(), `${kanaRoomTag}`, true);
    }

    // sends embed + copy and pasteable command
    message.channel.send(messageEmbed);
    message.channel.send(kanaInfoEmbed.embedCommandInfo);
    message.channel.send(kanaInfoEmbed.embedCommandText);

    // Had add new embed object due
    // will duplicate the embed above if not added
    const messageRulesEmbed = new Discord.MessageEmbed();
    messageRulesEmbed
        .setTitle(kanaInfoEmbed.embedRulesTitle)
        .setDescription(kanaInfoEmbed.embedRulesDesc)
        .setColor(kanaInfoEmbed.embedColor)
        .setImage(null);
    messageRulesEmbed
        .addFields(
            {name: '\u200B', value: kanaInfoEmbed.embedRules1, inline: false},
            {name: '\u200B', value: kanaInfoEmbed.embedRules2, inline: false},
            {name: '\u200B', value: kanaInfoEmbed.embedRules3, inline: false},
            {name: '\u200B', value: kanaInfoEmbed.embedRules4, inline: false})
        .addField('Warning', kanaInfoEmbed.embedRulesWarn, false);
    message.channel.send({embeds: [messageRulesEmbed]});
  }
  ,
};

