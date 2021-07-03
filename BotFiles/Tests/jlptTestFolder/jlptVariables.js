const jlptTestInfo = {
  passScore: '10',
};
const jlptCommand = {
  n5: `k!quiz gN5+N5 ${maxScore} mmq=5 atl=30 dauq=4.5 daaq=0 aaww=0`,
  n4: `k!quiz gN4+N4 ${maxScore} mmq=5 atl=30 dauq=4.5 daaq=0 aaww=0`,
  n3: `k!quiz gN3+N3 ${maxScore} mmq=5 atl=30 dauq=4.5 daaq=0 aaww=0`,
  n2: `k!quiz gN2+N2 ${maxScore} mmq=5 atl=30 dauq=4.5 daaq=0 aaww=0`,
  n1: `k!quiz gN1+N1 ${maxScore} mmq=5 atl=30 dauq=4.5 daaq=0 aaww=0`,
};

const jlptRoleID = {
  n5: '779928524341116929',
  n4: '779928531912097812',
  n3: '779928533345501195',
  n2: '779928536596217856',
  n1: '779928538919993375',
};


const jlptroleName = Object.entries(jlptRoles);

const jlptroom = {
  room1: '779907252173668362',
  room2: '787604436277133353',
  room3: '823049788416065597',
};

const embedimage = {
  n5: 'https://i.imgur.com/OMGwNy1.png',
  n4: 'https://i.imgur.com/lgrRCyR.png',
  n3: 'https://i.imgur.com/h4sGE5m.png',
  n2: 'https://i.imgur.com/pwkndoC.jpg',
  n1: 'https://i.imgur.com/nrKlTx3.png',
};

const embedColor = {
  n5: '#63a7ff',
  n4: '#ff6363',
  n3: '#a763ff',
  n2: '#fd0061',
  n1: '#4dffd5',
};

module.exports = {
  jlptTestInfo,
  jlptCommand,
  jlptRoleID,
  jlptroleName,
  jlptroom,
  embedimage,
  embedColor,
};
