module.exports = {

  // function that is called when the test is stopped either
  // by failing the quiz, using k!q stop, or when passing the quiz
  kanaStopTest: function(channelId) {
    global.kanaUserMap.set(channelId, false);
    global.kanaChallengerMap.set(channelId, null);
    global.kanaChallengingMap.set(channelId, false);
    console.log('Kana stop test executed');
    console.log('Kana Map After command:');
    console.log(global.kanaChallengingMap);
    console.log(global.kanaUserMap);
  },
};

