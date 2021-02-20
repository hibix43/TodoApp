import React from 'react';
import styled from 'styled-components';
import { StyledProps } from './../../types';
import Button from '../Button';

type Props = {
  check: boolean;
  title: string;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  check,
  title
}) => {
  return (
    <div className={`${className}`}>
      <Button
        className={`${className}__check`}
        imgUrl={
          check
            ? './assets/images/checked.svg'
            : './assets/images/unchecked.svg'
        }
      />
      <span className={`${className}__title`}>{title}</span>
      <Button
        className={`${className}__edit`}
        imgUrl={'./assets/images/edit.svg'}
      />
      <Button
        className={`${className}__delete`}
        imgUrl={'./assets/images/delete.svg'}
      />
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #333;
  border-bottom: 1px solid #ddd;
  &__check,
  &__edit {
    margin-right: 0.5rem;
  }
  &__title {
    font-size: 1rem;
    font-weight: bold;
  }
  &__edit {
    margin-left: auto;
  }
`;

export const TodoItem = StyledComponent;
