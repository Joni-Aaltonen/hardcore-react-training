import React from 'react';
import App from './components/containers/AppContainer';
import {pure} from 'recompose';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute } from 'react-router';

const Root = props => {

  const {store, history} = props;

  //context
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default pure(Root);
