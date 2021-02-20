import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

type Props = {
  className?: string;
  selectedTabTitle: string;
  tabTitles: string[];
};

const Component: React.VFC<Props> = ({
  className,
  selectedTabTitle,
  tabTitles
}) => {
  return (
    <div className={className}>
      {/* TODO: index は仮 */}
      {tabTitles.map((title, index) => (
        <Button
          className={title === selectedTabTitle ? `${className}__selected` : ''}
          key={index}
        >
          {title}
        </Button>
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  width: 50%;
  background-color: #eee;
  button {
    width: 100%;
    font-weight: bold;
  }
  &__selected {
    color: #fff;
    background-color: #333;
  }
`;

export const TabNavigation = StyledComponent;
