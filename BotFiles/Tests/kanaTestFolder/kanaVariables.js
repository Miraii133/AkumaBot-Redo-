/* eslint-disable max-len */
const kanaTestInfo = {
  testName: '天使 trial',
  roleID: '847059797920186388',
  passScore: '35',
  minimumMistakes: '5',
  timeLimit: '8',
  delayNoAnswer: '0',
  delayRightAnswer: '0',
  otherPlayerWait: '0',
  testScore: '5',

  // testing purposes score for fast and easy testing
  
};


// This contains all possible ways to type and input the
// kana command. Capitalization do not matter
const enumkanaCommand = {
  command1: `k!quiz hiragana+katakana ${kanaTestInfo.passScore}\
mmq=${kanaTestInfo.minimumMistakes} atl=${kanaTestInfo.timeLimit}\
  dauq=${kanaTestInfo.delayNoAnswer} daaq=${kanaTestInfo.delayRightAnswer}\
  aaww=${kanaTestInfo.otherPlayerWait}`,
  command2: `k!q hiragana+katakana ${kanaTestInfo.passScore}\
  mmq=${kanaTestInfo.minimumMistakes} atl=${kanaTestInfo.timeLimit}\
  dauq=${kanaTestInfo.delayNoAnswer} daaq=${kanaTestInfo.delayRightAnswer}\
  aaww=${kanaTestInfo.otherPlayerWait}`,
  command3: `k!quiz hiragana+katakana ${kanaTestInfo.testScore}\
\mmq=${kanaTestInfo.minimumMistakes} atl=${kanaTestInfo.timeLimit}\
  dauq=${kanaTestInfo.delayNoAnswer} daaq=${kanaTestInfo.delayRightAnswer}\
  aaww=${kanaTestInfo.otherPlayerWait}`,
};
// removes spaces so message.js condition can detect even without spaces
const kanaCommand = [];
let loop = 0;
Object.values(enumkanaCommand).forEach((value) => {
  const newMessage = value.replace(/ /g, '').toLowerCase();
  kanaCommand[loop] = newMessage;
  loop++;
});

const enumkanaRooms = {
  room1: '877185453210607657',
  room2: '877185545787277353',
  room3: '877185571489984532',
  room4: '877185619665780807',
  room5: '877185643648782336',
  room6: '877185682106355813',
  room7: '877185062922256406',
  room8: '877185091594485782',
  room9: '877185145638109204',
  room10: '877185185706291290',
  room11: '877188113108185088',
  room12: '877188140736053329',
  testRoom: '882807277432741888',
  
};
const kanaRooms = Object.values(enumkanaRooms);

module.exports = {
  kanaTestInfo,
  enumkanaCommand,
  enumkanaRooms,
  kanaCommand,
  kanaRooms};
