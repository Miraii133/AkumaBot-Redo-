/* eslint-disable require-jsdoc */
const Discord = require('discord.js');
const {botInfo} = require('../../botVariables');
const {bot} = require('../..');
const {botMention} = require('./botMention');
const {errorAnnounceEmbed, announceChannelText} = require('../../errorAnounceEmbed');

const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {kanaSetChallenger} = require(
    '../Tests/kanaTestFolder/kanaSetChallenger');
const {kanaStartMessage} = require(
    '../Tests/kanaTestFolder/kanaStartMessage');
const {kanaInfo} = require('./kanaInfo');

const {jlptCommand, jlptRoom} =
require('../Tests/jlptTestFolder/jlptVariables');
const {jlptStartMessage} =
require('../Tests/jlptTestFolder/jlptStartMessage');
const {jlptSetChallenger} =
require('../Tests/jlptTestFolder/jlptSetChallenger');


const {kanaScanWinner} =
require('../Tests/kanaScanWinner');
const {jlptScanWinner} =
require('../Tests/jlptScanWinner');
const {jlptStopTest} = require('../Tests/jlptTestFolder/jlptStopTest');
const {kanaStopTest} = require('../Tests/kanaTestFolder/kanaStopTest');
module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    const lowerCaseMessage = message.content.toLowerCase();
    const userMessage = lowerCaseMessage.replace(/ /g, '');
    const taggedUser = message.mentions.users.first();
    const jlptScanCheck = global.jlptChallengingMap.get(channelId);
    const kanaScanCheck = global.kanaChallengingMap.get(channelId);

    // checks if the user is a mod
    if (message.author.id == botInfo.ID) return;
    if (taggedUser == botInfo.ID) {
      botMention(message);
    }
    // displays kanainfoembed
    if (
      userMessage == '!kanainfoembed' &&
      (message.member.roles.cache.some((role) => role.name === 'Moderator'))) {
      return kanaInfo(message);
    }

    // retrieves all channelIds and resets all values of all maps
    // back to null or false
    if (
      userMessage == '!reset' &&
      message.channel.id == botInfo.testChannelRoom
    ) {
      jlptRoom.forEach((channelId) => {
        jlptStopTest(channelId);
      });
      kanaRooms.forEach((channelId) => {
        kanaStopTest(channelId);
      });
      bot.channels.cache.get(botInfo.announceChannelRoom)
          .send(announceChannelText.text);
      const messageEmbed = new Discord.MessageEmbed();
      messageEmbed
          .setTitle(errorAnnounceEmbed.title)
          .setDescription(errorAnnounceEmbed.desc)
          .setColor(errorAnnounceEmbed.color)
          .setImage(null)
          .addField(errorAnnounceEmbed.fieldTitle,
              errorAnnounceEmbed.fieldText, false)
          .setTimestamp();
      bot.channels.cache.get(botInfo.announceChannelRoom)
          .send({embeds: [messageEmbed]});
      return;
    }


    // scanWinner not called until
    // there is a challenger
    if (
      kanaScanCheck) {
      kanaScanWinner(message, channelId);
      return;
    }
    if (
      // if challengingMap is true
      jlptScanCheck) {
      jlptScanWinner(message, channelId);
      return;
    }

    if (
      jlptCommand
          .includes(userMessage) &&
      jlptRoom
          .includes(channelId)) {
      // checks if channel is already active or not
      const channelActive = global.jlptChallengingMap.get(channelId);
      if (!channelActive) {
        let isMultiple = false;
        global.jlptUserMap.forEach((values)=>{
          if (values == message.author.id) {
            // checks if user is taking multiple tests
            // from other channels
            isMultiple = true;
          }
        });
        if (isMultiple == true) return console.log('Taking multiple Jlpt test');
        const roleIndex = jlptCommand.indexOf(userMessage);
        jlptSetChallenger(message, roleIndex);
        jlptStartMessage(message, roleIndex, channelId);
        return console.log('Jlpt test');
      }
    }
    if (kanaCommand.includes(userMessage)){
      console.log("I am here!");
    }
    if (
      kanaRooms
          .includes(channelId) &&
      kanaCommand
          .includes(userMessage)) {
      // checks if channel is already active or not
      const channelActive = global.kanaChallengingMap.get(channelId);
      if (!channelActive) {
        let isMultiple = false;
        global.kanaUserMap.forEach((values)=>{
          if (values == message.author.id) {
            // checks if user is taking multiple tests
            // from other channels
            isMultiple = true;
          }
        });
        if (isMultiple == true) return console.log('Taking multiple test');
        kanaSetChallenger(message);
        kanaStartMessage(message, channelId);
        return console.log('Kana test');
      }
    }

    return console.log('Message not for test or from kotoba');
  },
};
