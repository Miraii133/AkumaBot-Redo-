/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {messageEmbed} = require(
    '../utils/embeds');
const {scanWinner} = require(
    '../Tests/kanaTestFolder/scanWinner');
const {setChallenger, userId} = require(
    '../Tests/kanaTestFolder/setChallenger');
const {startMessage} = require(
    '../Tests/kanaTestFolder/startMessage');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    lowerCaseMessage = message.content.toLowerCase();
    userMessage = lowerCaseMessage.replace(/ /g, '');

    if (
      // challengingMap stores userIds and details of quiz taker
      // channelId is used as the values of the map
      (global.challengingMap == null ||
      !global.challengingMap.get(channelId))) {
      if (
        !global.challengingMap == null) {
        console.log('scan');
        scanWinner(message, message);
      }

      if (message.author.id == botInfo.ID) {
        return console.log('Sent by Akuma bot');
      }
      if (!kanaRooms.includes(channelId)) {
        return console.log('Wrong room');
      }
      if (!kanaCommand.includes(userMessage)) {
        return console.log('Wrong command');
      }
      // setChallenger function stores the userId in challengingMap
      // if message does not come from a bot, store its details on maps
      // startMessage sends an embed used when starting a quiz
      setChallenger(message);
      startMessage(message, messageEmbed);
    }

    if (
    // scanWinner constantly scans the embeds of Kotoba
    // looking for winners or if the user has stopped quiz
      !message.author.id == botInfo.kotobaID ||
      !kanaRooms.includes(channelId)) {
      return console.log('Scan');
    }
    scanWinner(message, messageEmbed);
  },

};

