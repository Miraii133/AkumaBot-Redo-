/* eslint-disable require-jsdoc */
const {messageEmbed} = require(
    '../utils/embeds');
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
const {scanWinner} = require('../Tests/scanWinner');
const {botMention} = require('./botMention');

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
    if (global.challengingMap != null && message.author.id != botInfo.ID) {
      scanWinner(message, messageEmbed);
    }

    // if no user taking tests start JLPT quiz
    if (
      (global.challengingMap == null ||
      global.challengingMap.get(channelId)));
    if (
      Object.values(jlptCommand)
          .includes(userMessage)) {
      const roleIndex = jlptCommand.indexOf(userMessage);
      jlptSetChallenger(message, roleIndex);
      jlptStartMessage(message, messageEmbed, roleIndex, channelId);
      return console.log('jlpt test');
    }

    if (
      kanaRooms.includes(channelId) &&
      kanaCommand.includes(userMessage)) {
    // Implement some condition in the future
    // that will make it so you cant spam command and embed,
    // and change the challengingMap
      kanaSetChallenger(message, messageEmbed);
      kanaStartMessage(message, messageEmbed);
      return console.log('kana test');
    }
    return console.log('Message not for test or from kotoba');
  },
};
