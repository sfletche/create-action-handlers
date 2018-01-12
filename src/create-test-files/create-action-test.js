const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action test was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/actions-test.js\n` + content;
}

function getContent(directory, actionType, action, actionSpaced) {
  return `
import * as actions from '../actions';
import * as actionTypes from '../action-types';

describe('actions', () => {
  describe('${action}', () => {
    it('returns an action to ${actionSpaced}', () => {
      const expectedAction = {
        type: actionTypes.${actionType},
        data: { test: 'INCOMPLETE' },
      };
      expect(actions.${action}()).toEqual(expectedAction);
    });
  });
});
`;
}

function createActionTest({ directory, actionType, action, actionSpaced }) {
  const path = `${directory}/__tests__/actions-test.js`;
  const content = getContent(actionType, action, actionSpaced);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createActionTest;
