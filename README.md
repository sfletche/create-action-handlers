# create-action-handlers

## To Run
```
> mkdir myApplication
> mkdir myApplication/__tests__
> node src/create-action-handlers.js FETCH_STUFF ./myApplication
```

## Next Steps
* Allow args for destination folder (DEST) and action (maybe unnamed as it's a required arg)
* Consider args to determine whether or not to add to `reducer.js` (STATE) and `saga.js` (API)
* Differentiation for already existing files (e.g. already existing `actions.js`, `action-types.js`, `reducer.js`, or `sagas.js`)
* Explore making this a command line tool via https://www.npmjs.com/package/commander 
  * with good example here: https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs
* Publish as node module
