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

const {kanaScanWinner} =
require('../Tests/kanaScanWinner');
const {jlptScanWinner} =
require('../Tests/jlptScanWinner');
const {kanaInfo} = require('./kanaInfo');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    const lowerCaseMessage = message.content.toLowerCase();
    const userMessage = lowerCaseMessage.replace(/ /g, '');
    const taggedUser = message.mentions.users.first();

    const jlptScanCheck = global.jlptChallengingMap.get(channelId);
    const kanaScanCheck = global.kanaChallengingMap.get(channelId);
    if (taggedUser == botInfo.ID) {
      botMention(message);
    }
    if (
      userMessage == 'kanainfoembed' &&
      message.author.id == botInfo.ownerID) {
      return kanaInfo(message);
    }
    // scanWinner not called until
    // there is a challenger
    if (
      kanaScanCheck) {
      kanaScanWinner(message);
    }
    if (
      // if challengingMap is true
      jlptScanCheck) {
      jlptScanWinner(message);
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
