import React from 'react';
import App from './components/App';
import {pure} from 'recompose';

const Root = props => {

  return (
    <App />
  );
};

export default pure(Root);
