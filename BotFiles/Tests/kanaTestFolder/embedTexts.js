const {kanaTestInfo} = require('./kanaVariables');

// embed styling
const embedStyle = {
  borderColor: '#0099E1',
  url: null,
  author: null,
  thumbnail: null,
  image: null,
  setFooter: null,

};
const stopEmbed = {
  title: `${kanaTestInfo.testName} has stopped.`,
  description: 'Remember that you can re-try the quiz as much as you want!',
  borderColor: '#A62019',
};

// Embed used when someone else passes a test
const cheatEmbed = {
  title: `Someone else passed the test! Test is invalid!`,
  description: `** please do not interfere with someone else's quiz!**`,
};
  // Embed used when someone wins a test
const winEmbed = {
  title: '**Congratulations!**',
  description: ` **passed ${kanaTestInfo.testName}**`,
};
  // Embed used to dm the user who passed the test.
const dmEmbed = {
  title: '**Congratulations!**',
  // eslint-disable-next-line max-len
  description: `You passed the ${kanaTestInfo.testName}! 
  You now have access to the server!
  `,
};

module.exports = {stopEmbed, embedStyle,
  cheatEmbed, winEmbed, dmEmbed};
