/* eslint-disable require-jsdoc */
const {botInfo} = require('../../botVariables');
const {doKanaTest} = require('../Tests/kanaTestFolder/kanatest');
const {kanaCommand} = require('../Tests/kanaTestFolder/kanaVariables');
const {messageEmbed} = require('../utils/embeds');
module.exports = {

  name: 'message',
  execute(message) {
    messageEmbed;
    if (!message.member.id == botInfo.kotobaID) {
      return console.log('Not from kotoba or user');
    }
    if (!message.content == kanaCommand.command) return;
    doKanaTest(message, messageEmbed);
  },
};
