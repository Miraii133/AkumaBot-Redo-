module.exports = {

  jlptSetChallenger: function(message, roleIndex) {
    if (global.jlptRoleIndexMap == null) global.jlptRoleIndexMap = new Map();
    if (global.jlptUserMap == null) global.jlptUserMap = new Map();
    if (global.jlptChallengingMap == null)global.jlptChallengingMap = new Map();
    if (global.jlptChallengerMap == null) global.jlptChallengerMap = new Map();
    if (global.takenTestMap == null) global.takenTestMap = new Map();
    const channelId = message.channel.id;

    global.jlptRoleIndexMap.set(channelId, roleIndex);
    global.jlptUserMap.set(channelId, message.author.id);
    global.jlptChallengerMap.set(channelId, message.member);
    global.jlptChallengingMap.set(channelId, true);
    global.takenTestMap.set(channelId, 'Jlpt');
  },

};
