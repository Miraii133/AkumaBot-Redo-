const {kanaTestInfo} = require('./kanaTestFolder/kanaVariables');

// Embed used when someone else passes a test
const cheatEmbed = {
  title: `Someone else passed the test! Test is invalid!`,
  description: `** please do not interfere with someone else's quiz!**`,
};
// Embed used when someone wins a test
const kanawinEmbed = {
  title: '**Congratulations!**',
  description: ` **passed ${kanaTestInfo.testName}**`,
};
// Embed used to dm the user who passed the test.
const kanaDmEmbed = {
  title: '**Congratulations!**',
  description: `You passed the ${kanaTestInfo.testName}`,
};
// Congratulations!
// <user> passed the <role> test!
// You now have the <role> role. You are now able to participate in the
// discussions on <japanese-gen-chat>
const jlptwinEmbed = {
  title: '**Congratulations!**',
  description: `-user passed the -role test!
  You now have the -role. You are also able to participate in the
  discussions on -jpchat`,
};

const jlptDmEmbed = {
  title: '**Congratulations!**',
  description: `You passed the ${kanaTestInfo.testName}`,
};

module.exports = {
  cheatEmbed, kanawinEmbed,
  kanaDmEmbed, jlptwinEmbed,
  jlptDmEmbed};
