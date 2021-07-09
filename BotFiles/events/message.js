/* eslint-disable require-jsdoc */
const {messageEmbed} = require(
    '../utils/embeds');

const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);

const {setChallenger} = require(
    '../Tests/kanaTestFolder/kanaSetChallenger');
const {startMessage} = require(
    '../Tests/kanaTestFolder/kanaStartMessage');

const {jlptCommand, jlptRoom} =
require('../Tests/jlptTestFolder/jlptVariables');
const {jlptStartMessage} =
require('../Tests/jlptTestFolder/jlptStartMessage');
const {jlptSetChallenger} =
require('../Tests/jlptTestFolder/jlptSetChallenger');
const {scanWinner} = require('../Tests/scanWinner');
const {botInfo} = require('../../botVariables');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    const lowerCaseMessage = message.content.toLowerCase();
    const userMessage = lowerCaseMessage.replace(/ /g, '');


    // scanWinner not called until
    // there is a challenger
    if (global.challengingMap != null && message.author.id != botInfo.ID) {
      scanWinner(message, messageEmbed);
    }

    // if no user start JLPT quiz
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
      setChallenger(message, messageEmbed);
      startMessage(message, messageEmbed);
      return console.log('kana test');
    }
    return console.log('Message not for test or from kotoba');
  },
};
