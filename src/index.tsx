import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Page } from './components/Page';
import { store } from './store';

ReactDom.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);
