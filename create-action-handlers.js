const fs = require('fs');

function writeHandler(err) {
  if(err) {
    return console.log(err);
  }
  console.log("The file was saved!");
}

const actionType = 'FETCH_STUFF';
const action = 'fetchStuff';
const actionSpaced = 'fetch stuff';
const directory = 'myApplication';

// create action type
const actionTypeContent = `// ${directory}/action-types.js
const ${actionType} = '${directory}/${actionType}';

export { ${actionType} };
`;
fs.writeFile(`${directory}/action-types.js`, actionTypeContent, writeHandler);

// create action
const actionContent = `// ${directory}/actions.js
import { ${actionType} } from './action-types';

function ${action}() {
  return {
    type: ${actionType},
  };
}

export { ${action} };
`;
fs.writeFile(`${directory}/actions.js`, actionContent, writeHandler);

// create action test
const actionTestContent = `// ${directory}/actions-test.js
import * as actions from '../actions';
import * as actionTypes from '../action-types';

describe('actions', () => {
  describe('${action}', () => {
    it('returns an action to ${actionSpaced}', () => {
      const expectedAction = {
        type: actionTypes.${actionType},
        data: { test: 'INCOMPLETE' },
      };
      expect(actions.${action}()).toEqual(expectedAction);
    });
  });
});
`;
fs.writeFile(`${directory}/__tests__/actions-test.js`, actionTestContent, writeHandler);

// create reducer
const reducerContent = `// ${directory}/reducer.js
import * as actionTypes from './action-types';

const initialState = {};

function ${action}(state = initialState, action) {
  switch (action.type) {
    case actionTypes.${actionType}: {
      return initialState;
    }
    default: return state;
  }
}

export default ${action};
`;
fs.writeFile(`${directory}/reducer.js`, reducerContent, writeHandler);

// create reducer test
const reducerTestContent = `// ${directory}/reducer-test.js
import deepFreeze from 'deep-freeze';
import { ${actionType} } from '../action-types';
import reducer from '../reducer';

describe('application detailsReducer', () => {
  it('${actionSpaced}', () => {
    const initialState = {
    };
    deepFreeze(initialState);
    const action = {
      type: ${actionType},
    };
    const nextState = reducer(initialState, action);
    const expectedState = {
      test: 'INCOMPLETE',
    };
    expect(nextState).toEqual(expectedState);
  });
});
`;
fs.writeFile(`${directory}/__tests__/reducer-test.js`, reducerTestContent, writeHandler);

// create saga
const sagaContent = `// ${directory}/saga.js
import _ from 'lodash';
import { call, takeLatest } from 'redux-saga/effects';
import { ${actionType} } from './action-types';

function* ${action}Api() {
  const response = yield call(request, '/${action}', 'GET');
  return response;
}

function* ${action}(action) {
  try {
    // ${actionSpaced}
    const response = ${action}Api();
    if (response.status < 400) {
      // handle success
    } else {
      // handle everything else
    }
  } catch (error) {
    return error;
  }
}


function* watch${action}() {
  yield takeLatest(${actionType}, ${action});
}

export { watch${action}, ${action} };
`;
fs.writeFile(`${directory}/sagas.js`, sagaContent, writeHandler);

// create saga test
const sagaTestContent = `// ${directory}/sagas-test.js
import { call, takeLatest } from 'redux-saga/effects';
import { FETCH_APPLICATION_DETAILS } from '../action-types';
import {
  watch${action},
  ${action},
  ${action}Api,
} from '../sagas';
import * as actions from '../actions';

describe('${directory} sagas', () => {
  describe('watch${action}', () => {
    it('calls takeLatest on the action with the saga', () => {
      const generator = watchFetchApplicationDetails();
      let next = generator.next();
      expect(next.value).toEqual(takeLatest(${actionType}, ${action}));
      next = generator.next();
      expect(next).toEqual({ done: true, value: undefined });
    });
  });

  describe('${action}', () => {
    let generator;
    let next;
    beforeEach(() => {
      generator = ${action}();
      next = generator.next();
      expect(next.value).toEqual(call(${action}Api));
    });

    it('handles successful api call', () => {
      const response = {
        status: 200,
        data: {},
      };

      next = generator.next(response);
      expect(next).toEqual({ done: true, value: undefined });
    });

    it('handles unsuccessful api calls', () => {
      const response = {
        status: 404,
      };

      next = generator.next(response);
      expect(next).toEqual({ done: true, value: undefined });
    });
  });
});
`;
fs.writeFile(`${directory}/__tests__/sagas-test.js`, sagaTestContent, writeHandler);

