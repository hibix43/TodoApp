import React from 'react';
import { TodoList } from './index';

export default {
  title: 'TodoList'
};

export const Normal: React.VFC = () => (
  <TodoList
    todos={[
      { id: '1', title: 'Checked todo', checked: false },
      { id: '2', title: 'Unchecked Todo', checked: true }
    ]}
  />
);

export const Empty: React.VFC = () => <TodoList todos={[]} />;
