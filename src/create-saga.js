const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The saga was saved!");
}

function getContent(directory, actionType, action, actionSpaced) {
  return `// ${directory}/saga.js
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
  const sagaContent = getContent(directory, actionType, action, actionSpaced);
  fs.writeFile(`${directory}/sagas.js`, sagaContent, writeHandler);
}



module.exports = createSaga;
