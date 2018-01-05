# create-action-handlers

## To Run
```
> mkdir myApplication
> mkdir myApplication/__tests__
> node create-action-handlers.js
```

## Next Steps
* Allow args for destination folder (DEST) and action (maybe unnamed as it's a required arg)
* Consider args to determine whether or not to add to `reducer.js` (STATE) and `saga.js` (API)
* Programatically parsing parameterized action into action type, etc
* Differentiation for already existing files (e.g. already existing `actions.js`, `action-types.js`, `reducer.js`, or `sagas.js`)
* Explore making this a command line tool via https://www.npmjs.com/package/commander 
* Publish as node module
