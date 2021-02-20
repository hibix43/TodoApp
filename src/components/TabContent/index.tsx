import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Component: React.VFC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const TabContent = Component;
