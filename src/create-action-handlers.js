const fs = require('fs');
const _ = require('lodash');

const { createDirectories } = require('./helpers');
const { createActionType, createAction, createReducer, createSaga } = require('./create-files');
const { createActionTest, createReducerTest, createSagaTest } = require('./create-test-files');

function createActionHandlers(actionType, directory) {
  const action = _.camelCase(actionType);
  const actionSpaced = _.lowerCase(actionType);

  createDirectories(directory);

  createActionType({ directory, actionType });

  createAction({ directory, actionType, action });
  createActionTest({ directory, actionType, action, actionSpaced })

  createReducer({ directory, actionType, action });
  createReducerTest({ directory, actionType, actionSpaced });

  createSaga({ directory, actionType, action, actionSpaced });
  createSagaTest({ directory, actionType, action });
}

module.exports = createActionHandlers;
