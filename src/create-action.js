const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action was saved!");
}

function getContent(directory, actionType, action) {
  return (
    `// ${directory}/actions.js\n` +
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
  const actionContent = getContent(directory, actionType, action);
  fs.writeFile(`${directory}/actions.js`, actionContent, writeHandler);
}



module.exports = createAction;
