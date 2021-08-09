/* eslint-disable require-jsdoc */
const Discord = require('discord.js');
const messageEmbed = new Discord.MessageEmbed();

const {cheatEmbed, jlptwinEmbed} =
require('./embedTexts');
const {jlptStopTest} = require('./jlptTestFolder/jlptStopTest');
const {jlptTestInfo, jlptID, jlptEmbedImage,
  jlptEmbedColor, jlptChannelTag} =
require('./jlptTestFolder/jlptVariables');

module.exports = {
  // scanWinner constantly scans the embeds of Kotoba
  // looking for winners or if the user has stopped quiz
  jlptScanWinner: function(message, channelId) {
    const userId = global.jlptUserMap.get(channelId);
    const challenger = global.jlptChallengerMap.get(channelId);
    const roleIndex = global.jlptRoleIndexMap.get(channelId);
    for (const embed of message.embeds) {
      /*   if (
        embed.title == null ||
        embed.title.startsWith('**Quiz In Progress**')) {
        return console.log('Existing quiz in other channel');
      }*/
      if (
        // If the quiz taker fails
        embed.title == null ||
      !embed.title.startsWith('Multiple Deck Quiz Ended')
      ) {
        continue;
      }
      // If the quiz is stopped
      if (embed.description.endsWith('asked me to stop the quiz.')) {
        jlptStopTest(channelId);
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
            .slice(startOfNumber, startOfNumber + 2)
            .trim();
        const tag = field.value.slice(2, endOfTag);

        // tag = the winner of the quiz
        // userId = The one who started the quiz
        // converttag = Readable username of ID
        // convertuserId = Readable username of userId
        const converttag = '<@' + tag + '>';
        const convertuserId = '<@' + userId + '>';
        const roleTag = `<@&${jlptID[roleIndex]}>`;
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
              .setImage(null)
              .setTimestamp();
          message.channel.send(messageEmbed);
          jlptStopTest(channelId);
          console.log('Quiz cheated');
          break;
        }

        if (score != jlptTestInfo.passScore) return;
        // Cannot add values directly.
        // will add the unique characters in the embed
        // to the correct values given by variables.

        // replace -user no longer needed, bug occured
        // first taker always appear as winner

        // replace -jlptID[roleIndex] no longer needed, bug occured
        // Last test bugged @N5 test results in winEmbed
        jlptwinEmbed.description = jlptwinEmbed.description
            .replace('-jpchat', jlptChannelTag.roomName );
        messageEmbed
            .setTitle(jlptwinEmbed.title)
            .setDescription(`${convertuserId}${` passed `}\
            ${roleTag} ${` test!`}
            ${jlptwinEmbed.description}`)
            .setColor(jlptEmbedColor[roleIndex])
            .setImage(jlptEmbedImage[roleIndex])
            .setTimestamp();
        message.channel.send(messageEmbed);

        challenger.roles.remove(jlptID).then(
            (value) => {
              challenger.roles.add(jlptID[roleIndex]);
              jlptStopTest(channelId);
              return console.log('Jlpt Quiz finished');
            });
      }
      jlptStopTest(channelId);
      return console.log('Jlpt Quiz Failed');
    }
  },

};
