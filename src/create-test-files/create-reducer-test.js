const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The reducer test was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/reducer-test.js\n` + content;
}

function getContent(actionType, actionSpaced) {
  return `
import deepFreeze from 'deep-freeze';
import { ${actionType} } from '../action-types';
import reducer from '../reducer';

describe('application detailsReducer', () => {
  it('${actionSpaced}', () => {
    const initialState = {
    };
    deepFreeze(initialState);
    const action = {
      type: ${actionType},
    };
    const nextState = reducer(initialState, action);
    const expectedState = {
      test: 'INCOMPLETE',
    };
    expect(nextState).toEqual(expectedState);
  });
});
`;
}

function createReducerTest({ directory, actionType, actionSpaced }) {
  const path = `${directory}/__tests__/reducer-test.js`;
  const content = getContent(actionType, actionSpaced);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createReducerTest;
