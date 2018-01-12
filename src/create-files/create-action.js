const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/actions.js\n` + content;
}

function getContent(actionType, action) {
  return (
    `import { ${actionType} } from './action-types';\n` +
    `\n` +
    `function ${action}() {\n` +
    `  return {\n` +
    `    type: ${actionType},\n` +
    `  };\n` +
    `}\n` +
    `\n` +
    `export { ${action} };`
  );
}

function createAction({ directory, actionType, action }) {
  const path = `${directory}/actions.js`;
  const content = getContent(actionType, action);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createAction;
