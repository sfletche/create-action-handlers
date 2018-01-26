#!/usr/bin/env node

const program = require('commander');
const createActionHandlers = require('./src/create-action-handlers');

program
  .command('create <actionType> <path>')
  .description('Create entries for action type, action creator, reducer, and saga')
  .version('0.0.1')
  .option('-t, --tests','with unit tests')
  .option('-a, --actionCreator','create action creator')
  .option('-r, --reducer','create reducer')
  .option('-s, --saga','create saga')
  .action((actionType, path, options) => createActionHandlers(actionType, path, options))

program.parse(process.argv); // end with parse to parse through the input
