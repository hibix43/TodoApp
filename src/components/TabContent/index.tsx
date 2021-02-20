import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Component: React.VFC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

const StyledComponent = styled(Component)`
  background-color: #fff;
`;

export const TabContent = StyledComponent;
