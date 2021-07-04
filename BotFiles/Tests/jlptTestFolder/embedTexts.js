const cheatEmbed = {
  title: `Someone else passed the test! Test is invalid!`,
  description: `** please do not interfere with someone else's quiz!**`,
};
// Embed used when someone wins a test
const winEmbed = {
  title: '**Congratulations!**',
  // description: ` **passed ${kanaTestInfo.testName}**`,
};
// Embed used to dm the user who passed the test.
const dmEmbed = {
  title: '**Congratulations!**',
  // description: `You passed the ${kanaTestInfo.testName}!
  // You now have access to the server.`,
};

module.exports = {
  cheatEmbed,
  winEmbed,
  dmEmbed,
};
