import React from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../types';

type Props = {
  children: React.ReactNode;
};

const Component: React.VFC<Props & StyledProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)`
  background-color: #fff;
`;

export const TabContent = StyledComponent;
