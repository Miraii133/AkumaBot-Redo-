const {kanaTestInfo} = require('./kanaVariables');

const cheatEmbed = {
  title: `Someone else passed the test! Test is invalid!`,
  description: `** please do not interfere with someone else's quiz!**`,
};

const winEmbed = {
  title: '**Congratulations!**',
  description: ` **passed ${kanaTestInfo.testName}**`,
};

module.exports = {cheatEmbed, winEmbed};
