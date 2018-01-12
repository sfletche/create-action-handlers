const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action type was saved!");
}

function getContent(directory, actionType) {
  return (
    `const ${actionType} = '${directory}/${actionType}';\n` +
    `\n` +
    `export { ${actionType} };\n`
  );
}

function getFileContent(directory, content) {
  return `// ${directory}/action-types.js\n` + content;
}

function createActionType({ directory, actionType }) {
  const path = `${directory}/action-types.js`;
  const content = getContent(directory, actionType);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createActionType;


