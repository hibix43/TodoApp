import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeTab } from '../../tabSlice';
import { StyledProps } from '../../types';
import Button from '../Button';

type Props = {
  selectedTabTitle: string;
  tabTitles: string[];
  onClick: (selectedIndex: number) => void;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  selectedTabTitle,
  tabTitles,
  onClick
}) => {
  return (
    <div className={className}>
      {tabTitles.map((title, index) => (
        <Button
          className={title === selectedTabTitle ? `${className}__selected` : ''}
          key={index}
          onClick={() => onClick(index)}
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

const Container: React.VFC<Omit<Props, 'onClick'>> = ({
  selectedTabTitle,
  tabTitles
}) => {
  const dispatch = useDispatch();
  const handleClick = (selectedIndex: number) =>
    dispatch(changeTab(selectedIndex));
  return (
    <StyledComponent
      selectedTabTitle={selectedTabTitle}
      tabTitles={tabTitles}
      onClick={handleClick}
    />
  );
};

export const TabNavigation = Container;
