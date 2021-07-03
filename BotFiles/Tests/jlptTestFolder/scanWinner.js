
module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  scanWinner: function(message, messageEmbed) {
    const channelId = message.channel.id;
    const userId = global.userMap.get(channelId);
    const challenger = global.challengerMap.get(channelId);

    for (const embed of message.embeds) {
      if (
      // If the quiz taker fails
        embed.title == null ||
        !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      // If the quiz is stopped
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        return console.log('Quiz stopped');
      }
      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        // Slices the texts from final scores
        // To get the name of the winner
        const score = field.value
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        // converttag = Readable username of ID
        const converttag = '<@' + tag + '>';
        if (tag != userId) {
          console.log(`tag${tag}`);
          console.log(`userId${userId}`);
          // This embed is sent when someone else finishes the test
          // other than the one who triggered/started it.
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
          //  .then(global.challengingMap.set(channelId, null));
          break;
        }
        if (score == kanaTestInfo.passScore) {
          // Sends congratulation message in the channel where
          // user took the quiz
          messageEmbed
              .setTitle(winEmbed.title)
              .setDescription(`${converttag} ${winEmbed.description}`)
              .setColor(embedStyle.borderColor)
              .setTimestamp();

          message.channel.send(messageEmbed);

          // DM user that they passed and are able to see the entire server
          bot.users.fetch(userId).then((dm) => {
            messageEmbed
                .setTitle(dmEmbed.title)
                .setDescription(dmEmbed.description)
                .setColor(embedStyle.borderColor)
                .setTimestamp();
            dm.send(messageEmbed);
          });

          challenger.roles.add(kanaTestInfo.roleID);
          //  .then(global.challengingMap.set(channelId, null)); ;
        }
      }
    }
  },

};

