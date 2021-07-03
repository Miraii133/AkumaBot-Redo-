/* eslint-disable require-jsdoc */


// startMessage displays the embed that appears when you
// start the jlpt quiz
module.exports = {
  startMessage: function(message, messageEmbed) {
    messageEmbed
        .setTitle(`will start in 5 seconds..`)
        .setDescription(`
        **Taker: ${message.author.username}**`)
        .setColor(embedStyle.borderColor)
        .setTimestamp();
    message.channel.send(messageEmbed);
  },
};
