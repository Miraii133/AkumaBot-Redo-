module.exports = {

  jlptStopTest: function(channelId) {
    global.jlptRoleIndexMap.set(channelId, null);
    global.jlptUserMap.set(channelId, false);
    global.jlptChallengerMap.set(channelId, null);
    global.jlptChallengingMap.set(channelId, false);
    console.log('Jlpt Stop test executed');
    console.log('After command:');
    console.log(global.jlptChallengingMap);
    console.log('After command Jlpt user map:');
    console.log(jlptUserMap);
    console.log('After command: Jlpt roleIndex map:');
    console.log(global.jlptRoleIndexMap);
  },
};

