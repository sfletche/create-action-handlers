const fs = require('fs');
const _ = require('lodash');

const createDirectories = require('./create-directories');
const createActionType = require('./create-action-type');
const createAction = require('./create-action');
const createActionTest = require('./create-action-test');
const createReducer = require('./create-reducer');
const createReducerTest = require('./create-reducer-test');
const createSaga = require('./create-saga');
const createSagaTest = require('./create-saga-test');

const actionType = process.argv[2] || 'FETCH_STUFF';
const action = _.camelCase(actionType);
const actionSpaced = _.lowerCase(actionType);
const directory = process.argv[3] || './myApplication';

createDirectories(directory);

createActionType({ directory, actionType });

createAction({ directory, actionType, action });
createActionTest({ directory, actionType, action, actionSpaced })

createReducer({ directory, actionType, action });
createReducerTest({ directory, actionType, actionSpaced });

createSaga({ directory, actionType, action, actionSpaced });
createSagaTest({ directory, actionType, action });

