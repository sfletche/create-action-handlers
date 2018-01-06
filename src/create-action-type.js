const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action type was saved!");
}

function getContent(directory, actionType) {
  return (
    `// ${directory}/action-types.js\n` +
    `const ${actionType} = '${directory}/${actionType}';\n` +
    `\n` +
    `export { ${actionType} };\n`
  );
}

function createActionType({ directory, actionType }) {
  const actionTypeContent = getContent(directory, actionType);
  fs.writeFile(`${directory}/action-types.js`, actionTypeContent, writeHandler);
}

module.exports = createActionType;
