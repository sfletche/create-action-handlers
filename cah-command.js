#!/usr/bin/env node

const program = require('commander');
const createActionHandlers = require('./src/create-action-handlers');

program
  .command('create <actionType> <path>')
  .description('Create entries for action type, action creator, reducer, and saga')
  .version('0.0.1')
  .option('-d, --dirs','with directories')
  .option('-a, --action','with directories')
  .option('-r, --reducer','with directories')
  .option('-s, --saga','with directories')
  .option('-i, --input [optional]','optional user input')
  .option('-I, --another-input <required>','required user input')
  .action((actionType, path) => createActionHandlers(actionType, path))

program.parse(process.argv); // end with parse to parse through the input
