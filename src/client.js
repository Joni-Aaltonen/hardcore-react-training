/* global document */
/* eslint global-require: "off" */

console.log('Suckling on a duckling.');

import React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import Root from './Root';

//material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { createStore } from './utils/redux';
import * as reducers from './ducks';
import {browserHistory} from 'react-router';
import {reducer as formReducer} from 'redux-form';
if (__DEVELOPMENT__) {
  const Perf = require('react-addons-perf');
  window.Perf = Perf;
}


let middleware = [
  thunk,
  promiseMiddleware(),
];

if (true || __DEVELOPMENT__) {
  const createLogger = require('redux-logger');
  middleware = middleware.concat([createLogger()]);
}

//FIXME put this somewhere else
const reducer = {
  ...reducers,
  form: formReducer.plugin({
    addPersonForm: (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case "PERSON_ADD":
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }
  })
}

const { store, history } = createStore(
  reducer,
  browserHistory,
  middleware,
  [],
  undefined
);


const root = document.getElementById('app');
injectTapEventPlugin();
render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Root store={store} history={history} />
  </MuiThemeProvider>,
  root
  // <AppContainer>
  //    <Root />
  // </AppContainer>,
  //root
);

// No I don't understand what happens under the hood but it works :)
if (module.hot) {
  module.hot.accept('./Root', () => {
    const Root = require('./Root').default;
    render(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Root store={store} history={history} />
      </MuiThemeProvider>,
      root
    );
  });
}

