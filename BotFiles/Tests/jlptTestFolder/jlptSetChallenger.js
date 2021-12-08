module.exports = {
  // changes the map in jlptCreateMaps.js to the ID of the test taker
  // the test they are taking, and the channel they are taking it in
  jlptSetChallenger: function(message, roleIndex) {
    channelId = message.channel.id;
    global.jlptRoleIndexMap.set(channelId, roleIndex);
    global.jlptUserMap.set(channelId, message.author.id);
    global.jlptChallengerMap.set(channelId, message.member);

    // set value of channel to true
    // to make sure that channelActive in message.js
    // is always false in start
    global.jlptChallengingMap.set(channelId, true);
    console.log('Before command jlpt map:');
    console.log(global.jlptChallengingMap);
    console.log('Before command Jlpt user map:');
    console.log(jlptUserMap);
    console.log('Before command: roleIndex:');
    console.log(jlptRoleIndexMap);
  },
};
