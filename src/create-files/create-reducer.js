const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The reducer was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/reducer.js\n` + content;
}

function getContent(directory, actionType, action) {
  return `
import * as actionTypes from './action-types';

const initialState = {};

function ${action}(state = initialState, action) {
  switch (action.type) {
    case actionTypes.${actionType}: {
      return initialState;
    }
    default: return state;
  }
}

export default ${action};
`;
}

function createReducer({ directory, actionType, action }) {
  const path = `${directory}/reducer.js`;
  const content = getContent(actionType, action);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createReducer;
