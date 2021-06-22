const {doKanaTest} = require('../Tests/kanaTestFolder/kanatest');
const {kanaCommand} = require('../Tests/kanaTestFolder/kanaVariables');


module.exports = {
  name: 'message',
  execute(message) {
    if (message.author.bot) return;

    if (message.content == kanaCommand.command) return doKanaTest();
  },
};
