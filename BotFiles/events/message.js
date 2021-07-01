/* eslint-disable require-jsdoc */
const {kanaRooms, kanaCommand} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {messageEmbed} = require(
    '../utils/embeds');
const {scanWinner} = require(
    '../Tests/kanaTestFolder/scanWinner');
const {setChallenger} = require(
    '../Tests/kanaTestFolder/setChallenger');
const {startMessage} = require(
    '../Tests/kanaTestFolder/startMessage');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    lowerCaseMessage = message.content.toLowerCase();
    userMessage = lowerCaseMessage.replace(/ /g, '');


    // Makes sure that the first time its run,
    // will not call scanWinner since challengingMap
    // no value value here when first start
    if (global.challengingMap != null) {
      scanWinner(message, messageEmbed);
    }
    if (
      (global.challengingMap == null ||
      !global.challengingMap.get(channelId)));
    if (
      !kanaRooms.includes(channelId) ||
      !kanaCommand.includes(userMessage)) return;
    console.log(message.author.username);
    startMessage(message, messageEmbed);
    setChallenger(message, messageEmbed);
  },
};
