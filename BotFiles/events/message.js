/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {doKanaTest} = require(
    '../Tests/kanaTestFolder/kanatest');
const {kanaCommand, kanaRooms} = require(
    '../Tests/kanaTestFolder/kanaVariables',
);
const {messageEmbed} = require('../utils/embeds');
module.exports = {

  name: 'message',
  execute(message) {
    const channelId = message.channel.id;
    if (
      (global.challengingMap == null ||
      !global.challengingMap.get(channelId)) &&
      kanaRooms.includes(message.channel.id)) {
      messageEmbed;
      return doKanaTest(message, messageEmbed);
    }

    /*
    if (!kanaRooms.includes(message.channel.id)
    ) return console.log('Not from correct channel');

    if (!message.member.id == botInfo.kotobaID) {
      return console.log('Not from kotoba or user');
    }
    if (!message.content == kanaCommand.command) return;*/
  },
};
