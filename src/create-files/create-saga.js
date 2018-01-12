const fs = require('fs');
const getFileAppend = require('../helpers/get-file-append');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The saga was saved!");
}

function getFileContent(directory, content) {
  return `// ${directory}/saga.js\n` + content;
}

function getContent(actionType, action, actionSpaced) {
  return `
import _ from 'lodash';
import { call, takeLatest } from 'redux-saga/effects';
import { ${actionType} } from './action-types';

function* ${action}Api() {
  const response = yield call(request, '/${action}', 'GET');
  return response;
}

function* ${action}(action) {
  try {
    // ${actionSpaced}
    const response = ${action}Api();
    if (response.status < 400) {
      // handle success
    } else {
      // handle everything else
    }
  } catch (error) {
    return error;
  }
}


function* watch${action}() {
  yield takeLatest(${actionType}, ${action});
}

export { watch${action}, ${action} };
`;
}

function createSaga({ directory, actionType, action, actionSpaced }) {
  const path = `${directory}/saga.js`;
  const content = getContent(actionType, action, actionSpaced);
  if (!fs.existsSync(path)) {
    fs.writeFile(path, getFileContent(directory, content), writeHandler);
  } else {
    fs.appendFile(path, getFileAppend(content), writeHandler);
  }
}

module.exports = createSaga;
