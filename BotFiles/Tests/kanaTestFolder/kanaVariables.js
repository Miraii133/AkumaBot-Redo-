/* eslint-disable max-len */
const kanaTestInfo = {
  testName: '天使 trial',
  passScore: '10',
  roleID: '847059797920186388',
};

// This contains all possible ways to type and input the
// kana command. Capitalization do not matter
const enumkanaCommand = {

  command1: `k!quizhiragana+katakana${kanaTestInfo.passScore}mmq=5atl=8dauq=0daaq=0aaww=0`,
  command2: `k!qhiragana+katakana${kanaTestInfo.passScore}mmq=5atl=8dauq=0daaq=0aaww=0`,

};


const kanaCommand = Object.values(enumkanaCommand);

// if something went wrong check this
const enumkanaRooms = {
  room1: '846690933751152640',
  room2: '849483729310187560',
  room3: '860078648580636722',
  room4: '860078703294939136',
  room5: '856356559466659840',
};
const kanaRooms = Object.values(enumkanaRooms);

module.exports = {
  kanaTestInfo,
  kanaCommand,
  kanaRooms};
