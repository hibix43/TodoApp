import React from 'react';
import { Todo } from './Todo';

export default {
  title: 'Todo'
};

export const Unchecked: React.VFC = () => (
  <Todo check={false} title={'Unchecked Todo'} />
);

export const Checked: React.VFC = () => (
  <Todo check={true} title={'Checked Todo'} />
);
