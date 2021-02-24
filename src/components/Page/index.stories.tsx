import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Page } from './index';

export default {
  title: 'Page'
};

export const Normal: React.VFC = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);
