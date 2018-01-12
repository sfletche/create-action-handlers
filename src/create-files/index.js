const createActionType = require('./create-action-type');
const createAction = require('./create-action');
const createReducer = require('./create-reducer');
const createSaga = require('./create-saga');

const fileCreators = {
  createActionType,
  createAction,
  createReducer,
  createSaga,
};

module.exports = fileCreators;
