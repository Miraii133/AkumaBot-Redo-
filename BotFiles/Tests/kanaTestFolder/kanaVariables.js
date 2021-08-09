/* eslint-disable max-len */
const kanaTestInfo = {
  testName: '天使 trial',
  roleID: '847059797920186388',
  passScore: '10',
  minimumMistakes: '5',
  timeLimit: '8',
  delayNoAnswer: '0',
  delayRightAnswer: '0',
  otherPlayerWait: '0',
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
  room1: '846690933751152640',
  room2: '849483729310187560',
  room3: '860078648580636722',
  room4: '860078703294939136',
  room5: '864807250132729886',
  room6: '864807271677296660',
};
const kanaRooms = Object.values(enumkanaRooms);

module.exports = {
  kanaTestInfo,
  enumkanaCommand,
  enumkanaRooms,
  kanaCommand,
  kanaRooms};
