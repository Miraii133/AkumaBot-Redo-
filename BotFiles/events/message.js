/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {kanaRooms} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {messageEmbed} = require(
    '../utils/embeds');
const {scanWinner} = require(
    '../Tests/kanaTestFolder/scanWinner');
const {setChallenger} = require(
    '../Tests/kanaTestFolder/setChallenger');


module.exports = {

  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    if (
      (global.challengingMap == null ||
      !global.challengingMap.get(channelId)) &&
      kanaRooms.includes(channelId)
    ) {
      // setChallenger stores the userId in maps
      if (message.author.bot) return;
      setChallenger(message);
    }
    // scanWinner constantly scans the embeds of Kotoba
    // looking for winners or if the user has stopped quiz
    if (
      message.member.id == botInfo.kotobaID ) {
      return scanWinner(message, messageEmbed);
    }
  },
};
