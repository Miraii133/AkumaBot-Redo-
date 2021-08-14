const {kanaTestInfo} = require('./kanaTestFolder/kanaVariables');

// Embed used when someone else passes a test
const cheatEmbed = {
  title: `Someone else interfered with the test! Test is invalid!`,
  description: `** please do not interfere with someone else's quiz!**`,
};
// Embed used when someone wins a test
const kanaEmbedStyle = {
  borderColor: '#f87fe4',
};
const kanawinEmbed = {
  title: '**Congratulations!**',
  description: ` **passed ${kanaTestInfo.testName}**`,
};
// Embed used to dm the user who passed the test.
const kanaDmEmbed = {
  title: '**Congratulations!**',
  description: `**You passed ${kanaTestInfo.testName}**
  You now have access to the server! Goodluck on your Japanese studies and
  welcome to the server!`,
};


const jlptwinEmbed = {
  title: '**Congratulations!**',
  description: `You can now talk in -jpchat`,
};


module.exports = {
  cheatEmbed, kanawinEmbed, kanaEmbedStyle,
  kanaDmEmbed, jlptwinEmbed,
};
