module.exports = {

  jlptStopTest: function(channelId) {
    global.jlptRoleIndexMap.set(channelId, null);
    global.jlptUserMap.set(channelId, null);
    global.jlptChallengerMap.set(channelId, null);
    global.jlptChallengingMap.set(channelId, false);
    console.log('Jlpt Stop test executed');
    console.log('After command:');
    console.log(global.jlptChallengingMap);
  },

};

