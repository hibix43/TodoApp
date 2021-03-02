import React from 'react';
import { StyledProps } from '../../types';
import Input from '../Input';

type Props = {
  isModify: boolean;
  title: string;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  isModify,
  title
}) => {
  return isModify ? (
    <Input className={`${className}`} value={title} />
  ) : (
    <span className={`${className}`}>{title}</span>
  );
};

export const TodoItemTitle = Component;
