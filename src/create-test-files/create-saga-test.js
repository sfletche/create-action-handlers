const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The saga test was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/__tests__/saga-test.js\n` + content;
}

function getContent(directory, actionType, action) {
  return `
import { call, takeLatest } from 'redux-saga/effects';
import { ${actionType} } from '../action-types';
import {
  watch${action},
  ${action},
  ${action}Api,
} from '../sagas';
import * as actions from '../actions';

describe('${directory} sagas', () => {
  describe('watch${action}', () => {
    it('calls takeLatest on the action with the saga', () => {
      const generator = watchFetchApplicationDetails();
      let next = generator.next();
      expect(next.value).toEqual(takeLatest(${actionType}, ${action}));
      next = generator.next();
      expect(next).toEqual({ done: true, value: undefined });
    });
  });

  describe('${action}', () => {
    let generator;
    let next;
    beforeEach(() => {
      generator = ${action}();
      next = generator.next();
      expect(next.value).toEqual(call(request, '/${action}', 'GET'));
    });

    it('handles successful api call', () => {
      const response = {
        status: 200,
        data: {},
      };

      next = generator.next(response);
      expect(next).toEqual({ done: true, value: undefined });
    });

    it('handles unsuccessful api calls', () => {
      const response = {
        status: 404,
      };

      next = generator.next(response);
      expect(next).toEqual({ done: true, value: undefined });
    });
  });
});
`;
}

function createSagaTest({ directory, actionType, action, actionSpaced }) {
  const path = `${directory}/__tests__/saga-test.js`;
  const content = getContent(directory, actionType, action, actionSpaced);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createSagaTest;
