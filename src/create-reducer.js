const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The reducer was saved!");
}

function getContent(directory, actionType, action) {
  return `// ${directory}/reducer.js
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
  const reducerContent = getContent(directory, actionType, action);
  fs.writeFile(`${directory}/reducer.js`, reducerContent, writeHandler);
}

module.exports = createReducer;
