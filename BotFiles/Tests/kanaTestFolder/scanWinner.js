/* eslint-disable require-jsdoc */
const {winEmbed, cheatEmbed} = require('./embedTexts');
const {kanaTestInfo} = require('./kanaVariables');
module.exports = {
  scanWinner: function(message, messageEmbed) {
    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);
    const challenger = global.challengerMap.get(channelId);
    for (const embed of message.embeds) {
      if (
        embed.title == null ||
      !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        global.challengingMap.set(channelId, false);
        message.channel.send(`${userId}`);
        break;
      }

      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        // Slices the texts from final scores
        // To get the winner
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        // converttag = Readable username of ID
        const converttag = '<@' + tag + '>';
        if (tag != userId) {
          // Converts the ids to usernames
          messageEmbed
              .setTitle(
                  `${cheatEmbed.title}`,
              )
              .setDescription(
                  // converttag displays the winner of theq uiz
                  // cheatEmbed.description displays the text for the embed
                  `${converttag} ${cheatEmbed.description}`,
              )
              .setTimestamp();
          message.channel.send(messageEmbed);
          break;
        }
        if (score == kanaTestInfo.passScore) {
          // Passing code
          messageEmbed
              .setTitle(winEmbed.title)
              .setDescription(`${converttag} ${winEmbed.description}`)
              .setTimestamp();
          message.channel.send(messageEmbed);
          userId.send(messageEmbed);
          challenger.roles.add(kanaTestInfo.roleID);
          global.challengingMap.set(channelId, false);
          break;
        }
      }
    }
  },
};
