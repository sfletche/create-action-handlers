const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The reducer test was saved!");
}

function getContent(directory, actionType, actionSpaced) {
  return `// ${directory}/reducer-test.js
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
  const reducerTestContent = getContent(directory, actionType, actionSpaced);
  fs.writeFile(`${directory}/__tests__/reducer-test.js`, reducerTestContent, writeHandler);
}



module.exports = createReducerTest;
