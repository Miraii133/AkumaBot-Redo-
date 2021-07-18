module.exports = {

  jlptStopTest: function(channelId) {
    global.jlptRoleIndexMap.set(channelId, null);
    global.jlptUserMap.set(channelId, null);
    global.jlptChallengerMap.set(channelId, null);
    global.jlptChallengingMap.set(channelId, null);
    console.log('Jlpt Stop test executed');
  },

};

