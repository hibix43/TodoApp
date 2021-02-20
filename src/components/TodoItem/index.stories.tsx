import React from 'react';
import { TodoItem } from './index';

export default {
  title: 'TodoItem'
};

export const Unchecked: React.VFC = () => (
  <TodoItem check={false} title={'Unchecked Todo'} />
);

export const Checked: React.VFC = () => (
  <TodoItem check={true} title={'Checked Todo'} />
);
