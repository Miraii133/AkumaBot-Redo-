/* eslint-disable require-jsdoc */

const {kanaRooms} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {scanWinner} = require('../Tests/kanaTestFolder/scanWinner');

const {setChallenger} = require('../Tests/kanaTestFolder/setChallenger');
const {messageEmbed} = require('../utils/embeds');

module.exports = {

  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    if (
      (global.challengingMap == null ||
      !global.challengingMap.get(channelId)) &&
      kanaRooms.includes(channelId)
    ) {
      messageEmbed;
      // doKanaTest Function stores the userId in maps
      setChallenger(message, messageEmbed);

      // scanWinner constantly scans the embeds of Kotoba
      // looking for winners or if the user has stopped quiz
      scanWinner(message, messageEmbed);
    }
  },
};
