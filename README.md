# create-action-handlers

## To Run
```
> git clone 
> cd create-action-handlers
> mkdir myApplication
> mkdir myApplication/__tests__
> node src/create-action-handlers.js FETCH_STUFF ./myApplication
```

## Next Steps
* Differentiation for already existing files (e.g. already existing `actions.js`, `action-types.js`, `reducer.js`, or `sagas.js`)
* Convert to command line tool via https://www.npmjs.com/package/commander 
  * See example: https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs
* Consider args for 
  * whether or not to add to `reducer.js` (STATE) and `saga.js` (API)
  * destination folder (e.g. ./myApplication)
  * action type (e.g. FETCH_STUFF)
  * whether or not container folders (e.g. /actions, /constants, /reducers, /sagas) are being / should be used
* Publish as node module
