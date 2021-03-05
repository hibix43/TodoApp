import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TodoListTabs } from './index';

export default {
  title: 'TodoListTabs'
};

export const Normal: React.VFC = () => (
  <Provider store={store}>
    <TodoListTabs />
  </Provider>
);
