const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The action test was saved!");
}

function getContent(directory, actionType, action, actionSpaced) {
  return `// ${directory}/actions-test.js
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
  const actionTestContent = getContent(directory, actionType, action, actionSpaced);
  fs.writeFile(`${directory}/__tests__/actions-test.js`, actionTestContent, writeHandler);
}




module.exports = createActionTest;
