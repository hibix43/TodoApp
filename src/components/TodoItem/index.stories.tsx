import React from 'react';
import { TodoItem } from './index';

export default {
  title: 'TodoItem'
};

export const Unchecked: React.VFC = () => (
  <TodoItem id={'0'} check={false} title={'Unchecked Todo'} />
);

export const Checked: React.VFC = () => (
  <TodoItem id={'0'} check={true} title={'Checked Todo'} />
);
