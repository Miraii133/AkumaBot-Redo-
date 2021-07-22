const {jlptCreateMaps} = require('../Tests/jlptTestFolder/jlptCreateMaps');

module.exports = {
  name: 'ready',
  once: true,
  execute() {
    // rooms are set to false beforehand
    // prevents rooms from being null, gives value immediately
    jlptCreateMaps();
    console.log('Ready');
  },
};
