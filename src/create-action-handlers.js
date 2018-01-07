const fs = require('fs');
const _ = require('lodash');

const createActionType = require('./create-action-type');
const createAction = require('./create-action');
const createActionTest = require('./create-action-test');
const createReducer = require('./create-reducer');
const createReducerTest = require('./create-reducer-test');
const createSaga = require('./create-saga');
const createSagaTest = require('./create-saga-test');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}

const actionType = process.argv[2] || 'FETCH_STUFF';
const action = _.camelCase(actionType);
const actionSpaced = _.lowerCase(actionType);
const directory = process.argv[3] || './myApplication';

createActionType({ directory, actionType });

createAction({ directory, actionType, action });
createActionTest({ directory, actionType, action, actionSpaced })

createReducer({ directory, actionType, action });
createReducerTest({ directory, actionType, actionSpaced });

createSaga({ directory, actionType, action, actionSpaced });
createSagaTest({ directory, actionType, action });

