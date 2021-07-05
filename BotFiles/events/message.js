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

const {jlptCommand} =
require('../Tests/jlptTestFolder/jlptVariables');

const {jlptStartMessage} =
require('../Tests/jlptTestFolder/jlptStartMessage');
const {jlptSetChallenger} =
require('../Tests/jlptTestFolder/jlptSetChallenger');

module.exports = {
  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    const lowerCaseMessage = message.content.toLowerCase();
    const userMessage = lowerCaseMessage.replace(/ /g, '');
    if (Object.values(jlptCommand).includes(userMessage)) {
      const roleIndex = jlptCommand.indexOf(userMessage);
      jlptSetChallenger(message, roleIndex);
      jlptStartMessage(message, messageEmbed, roleIndex, channelId);
      return console.log('jlpt test');
    }


    // Makes sure that the first time its run,
    // will not call scanWinner since challengingMap
    // no value value here when first start
    {
      if (global.challengingMap != null) {
        scanWinner(message, messageEmbed);
      }
    }
    if (
      (global.challengingMap == null ||
      global.challengingMap.get(channelId)));
    if (
      !kanaRooms.includes(channelId) ||
      !kanaCommand.includes(userMessage)) return console.log('blocked');
    // Implement some condition in the future
    // that will make it so you cant spam command and embed,
    // and change the challengingMap
    setChallenger(message, messageEmbed);
    startMessage(message, messageEmbed);

    // JLPT TEST \\
  },
};
