/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {kanaSetChallenger} = require(
    '../Tests/kanaTestFolder/kanaSetChallenger');
const {kanaStartMessage} = require(
    '../Tests/kanaTestFolder/kanaStartMessage');

const {jlptCommand} =
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
      global.jlptChallengingMap != null &&
      message.author.id != botInfo.ID) {
      jlptScanWinner(message);
    }

    // if no user taking tests start JLPT quiz
    if (
      (global.jlptChallengingMap == null ||
      global.jlptChallengingMap.get(channelId) == null)) {
      if (
        Object.values(jlptCommand)
            .includes(userMessage)) {
        const roleIndex = jlptCommand.indexOf(userMessage);
        jlptSetChallenger(message, roleIndex);
        jlptStartMessage(message, roleIndex, channelId);
        return console.log('jlpt test');
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
