/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {kanaSetChallenger} = require(
    '../Tests/kanaTestFolder/kanaSetChallenger');
const {kanaStartMessage} = require(
    '../Tests/kanaTestFolder/kanaStartMessage');

const {jlptCommand, jlptRoom} =
require('../Tests/jlptTestFolder/jlptVariables');
const {jlptStartMessage} =
require('../Tests/jlptTestFolder/jlptStartMessage');
const {jlptSetChallenger} =
require('../Tests/jlptTestFolder/jlptSetChallenger');
const {botMention} = require('./botMention');

const {kanaScanWinner} = require('../Tests/kanaScanWinner');
const {jlptScanWinner} = require('../Tests/jlptScanWinner');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    const correctChannelId = null;
    const jlptScanCheck = global.jlptChallengingMap.get(channelId);
    const lowerCaseMessage = message.content.toLowerCase();
    const userMessage = lowerCaseMessage.replace(/ /g, '');
    const taggedUser = message.mentions.users.first();

    if (taggedUser == botInfo.ID) {
      botMention(message);
    }
    // scanWinner not called until
    // there is a challenger
    if (
      global.kanaChallengingMap != null &&
      message.author.id != botInfo.ID) {
      kanaScanWinner(message);
    } else if (
      jlptScanCheck
    ) {
      jlptScanWinner(message, correctChannelId);
    }

    if (
      jlptCommand
          .includes(userMessage) &&
      jlptRoom
          .includes(channelId)) {
      correctChannelId = message.author.id;
      // when the channel is used first time
      /* if (global.jlptChallengingMap == null) {
        const roleIndex = jlptCommand.indexOf(userMessage);
        jlptSetChallenger(message, roleIndex);
        jlptStartMessage(message, roleIndex, channelId);
        console.log(global.jlptChallengingMap);
        return console.log('New Jlpt test');
      }*/
      const channelActive = global.jlptChallengingMap.get(channelId);
      console.log(`channelactive ${channelActive}`);
      if (!channelActive) {
        const roleIndex = jlptCommand.indexOf(userMessage);
        jlptSetChallenger(message, roleIndex);
        jlptStartMessage(message, roleIndex, channelId);
        return console.log('Jlpt test');
      }
    }

    if (
      (global.kanaChallengingMap == null ||
      global.kanaChallengingMap.get(channelId) == null)) {
      if (
        kanaRooms.includes(channelId) &&
      kanaCommand.includes(userMessage)) {
        // Implement some condition in the future
        // that will make it so you cant spam command and embed,
        // and change the challengingMap
        kanaSetChallenger(message);
        kanaStartMessage(message);
        return console.log('kana test');
      }
    }
    return console.log('Message not for test or from kotoba');
  },
};
