/* eslint-disable require-jsdoc */

module.exports = {
  // This function will set the values of users who
  // takes the kana quiz
  setChallenger: function(message) {
    if (global.userMap == null) global.userMap = new Map();
    if (global.challengingMap == null) global.challengingMap = new Map();
    if (global.challengerMap == null) global.challengerMap = new Map();
    const channelId = message.channel.id;

    global.userMap.set(channelId, message.author.id);
    global.challengerMap.set(channelId, message.member);
    global.challengingMap.set(channelId, true);
  },

};
