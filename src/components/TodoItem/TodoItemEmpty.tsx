import React from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../types';

const Component: React.VFC<StyledProps> = ({ className }) => {
  return <div className={className}>Nothing.</div>;
};

const StyledComponent = styled(Component)`
  width: 100%;
  padding: 0.5rem;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
`;

export const TodoItemEmpty = StyledComponent;
