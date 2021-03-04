import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TodoList } from './index';

export default {
  title: 'TodoList'
};

export const Normal: React.VFC = () => (
  <Provider store={store}>
    <TodoList
      todos={[
        { id: '1', title: 'Checked todo', checked: false },
        { id: '2', title: 'Unchecked Todo', checked: true }
      ]}
    />
  </Provider>
);

export const Empty: React.VFC = () => <TodoList todos={[]} />;
