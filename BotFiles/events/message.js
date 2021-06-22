const {kanaTest} = require('../Tests/kanatest');


module.exports = {
  name: 'message',
  execute(message) {
    if (message.author.bot) return console.log('Message sent by bot');
    kanaTest();
  },
};
