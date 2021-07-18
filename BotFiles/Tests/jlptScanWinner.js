/* eslint-disable require-jsdoc */
const Discord = require('discord.js');
const messageEmbed = new Discord.MessageEmbed();

const {cheatEmbed, jlptwinEmbed} =
require('./embedTexts');
const {jlptStopTest} = require('./jlptTestFolder/jlptStopTest');
const {jlptTestInfo, jlptID, jlptembedImage,
  jlptembedColor, jlptroleName, jlptchannelTag} =
require('./jlptTestFolder/jlptVariables');

module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  jlptScanWinner: function(message) {
    const channelId = message.channel.id;
    const userId = global.jlptChallengerMap.get(channelId);
    const roleIndex = global.jlptRoleIndexMap.get(channelId);

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
        jlptStopTest(message, channelId, roleIndex);
        return console.log('Quiz stopped');
      }
      for (const field of embed.fields) {
        // Scans all embeds sent by Kotoba to see if
        // anyone already won
        // Slices the texts from final scores
        // To get the name of the winner
        if (field.name != 'Final Scores') continue;
        const endOfTag = field.value.indexOf('>');
        const startOfNumber = endOfTag + 6;

        const score = field.value
            .slice(startOfNumber, startOfNumber + 2) // 2
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        // converttag = Readable username of ID
        const converttag = '<@' + tag + '>';
        if (tag != userId) {
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
          jlptStopTest(message, channelId, roleIndex);
          console.log('Quiz cheated');
          break;
        }

        if (score != jlptTestInfo.passScore) return;
        // Cannot add values directly.
        // will add the unique characters in the embed
        // to the correct values given by variables.
        jlptwinEmbed.description = jlptwinEmbed.description
            .replace('-user', converttag);
        jlptwinEmbed.description = jlptwinEmbed.description
            .replace('-role', `<@&${jlptroleName[roleIndex]}>`);
        jlptwinEmbed.description = jlptwinEmbed.description
            .replace('-jpchat', jlptchannelTag.roomName );

        messageEmbed
            .setTitle(jlptwinEmbed.title)
            .setDescription(`${jlptwinEmbed.description}`)
            .setColor(jlptembedColor[roleIndex])
            .setImage(jlptembedImage[roleIndex])
            .setTimestamp();
        message.channel.send(messageEmbed);

        userId.roles.remove(jlptID).then(
            (value) => {
              userId.roles.add(jlptID[roleIndex]);
              jlptStopTest(message, channelId, roleIndex);
              return console.log('Quiz finished');
            });
      }
    }
  },

};
