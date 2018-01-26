const { camelCase, lowerCase } = require('lodash');

const { createDirectories } = require('./helpers');
const { createActionType, createAction, createReducer, createSaga } = require('./create-files');
const { createActionTest, createReducerTest, createSagaTest } = require('./create-test-files');

function createActionHandlers(actionType, directory, options) {
  const action = camelCase(actionType);
  const actionSpaced = lowerCase(actionType);
  const { actionCreator, reducer, saga, tests } = options;

  createDirectories(directory);

  createActionType({ directory, actionType });

  if (actionCreator) {
    createAction({ directory, actionType, action });
    tests && createActionTest({ directory, actionType, action, actionSpaced })
  }

  if (reducer) {
    createReducer({ directory, actionType, action });
    tests && createReducerTest({ directory, actionType, actionSpaced });
  }

  if (saga) {
    createSaga({ directory, actionType, action, actionSpaced });
    tests && createSagaTest({ directory, actionType, action });
  }
}

module.exports = createActionHandlers;
