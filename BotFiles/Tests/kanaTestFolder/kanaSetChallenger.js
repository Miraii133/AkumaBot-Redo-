/* eslint-disable require-jsdoc */

module.exports = {
  // This function will set the values of users who
  // takes the kana quiz
  kanaSetChallenger: function(message) {
    if (global.kanaUserMap == null) global.kanaUserMap = new Map();
    if (global.kanaChallengingMap == null)global.kanaChallengingMap = new Map();
    if (global.kanaChallengerMap == null) global.kanaChallengerMap = new Map();
    const channelId = message.channel.id;

    global.kanaUserMap.set(channelId, message.author.id);
    global.kanaChallengerMap.set(channelId, message.member);
    global.kanaChallengingMap.set(channelId, true);
  },

};
