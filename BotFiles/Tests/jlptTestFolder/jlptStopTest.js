module.exports = {
 // function that is called when the test is stopped either
  // by failing the quiz, using k!q stop, or when passing the quiz
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

