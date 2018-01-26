# create-action-handlers

## To Run
```
> git clone https://github.com/sfletche/create-action-handlers.git
> cd create-action-handlers
> npm install
> npm link
// now from any directory you can type
> actionHandlers create FETCH_STUFF myApplication
```

## Next Steps
* Convert to installable node module
* Convert to command line tool via https://www.npmjs.com/package/commander 
  * See example: https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs
  * in process...
* Consider args for 
  * whether or not to add to `reducer.js` (STATE) and `saga.js` (API)
  * destination folder (e.g. ./myApplication)
  * action type (e.g. FETCH_STUFF)
  * whether or not container folders (e.g. /actions, /constants, /reducers, /sagas) are being / should be used
  * name / location of tests folder
* Publish as node module
