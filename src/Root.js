import React from "react";
import AppContainer from "./components/AppContainer";
import {pure} from "recompose";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute} from "react-router";
import IndexViewContainer from "./components/views/containers/IndexViewContainer";
import PersonViewContainer from "./components/views/containers/PersonViewContainer";

const Root = props => {

  const {store, history} = props;

  //context
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={AppContainer} >
          <IndexRoute component={IndexViewContainer} />
          <Route path="person/:id" component={PersonViewContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default pure(Root);
