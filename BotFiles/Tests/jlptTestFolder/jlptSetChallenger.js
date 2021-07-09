module.exports = {

  jlptSetChallenger: function(message, roleIndex) {
    if (global.roleIndexMap == null) global.roleIndexMap = new Map();
    if (global.userMap == null) global.userMap = new Map();
    if (global.challengingMap == null) global.challengingMap = new Map();
    if (global.challengerMap == null) global.challengerMap = new Map();
    if (global.takenTestMap == null) global.takenTestMap = new Map();
    const channelId = message.channel.id;

    global.roleIndexMap.set(channelId, roleIndex);
    global.userMap.set(channelId, message.author.id);
    global.challengerMap.set(channelId, message.member);
    global.challengingMap.set(channelId, true);
    global.takenTestMap.set(channelId, 'Jlpt');
  },

};
