const fs = require('fs-extra');
const path = require('path');

function createDirectories(directory) {
  if (!fs.existsSync(directory)) {
    fs.ensureDirSync(directory);
    console.log(`created ${directory}`);
  }
  if (!fs.existsSync(path.join(directory, '__tests__'))) {
    fs.mkdirSync(path.join(directory, '__tests__'));
    console.log(`created ${directory}/__tests__`);
  }
}

module.exports = createDirectories;
