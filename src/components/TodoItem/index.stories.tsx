import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { TodoItem } from './index';
import { TodoItemEmpty } from './TodoItemEmpty';

export default {
  title: 'TodoItem'
};

export const Unchecked: React.VFC = () => (
  <Provider store={store}>
    <TodoItem id={'0'} check={false} title={'Unchecked Todo'} />
  </Provider>
);

export const Checked: React.VFC = () => (
  <Provider store={store}>
    <TodoItem id={'0'} check={true} title={'Checked Todo'} />
  </Provider>
);

export const Empty: React.VFC = () => <TodoItemEmpty />;
