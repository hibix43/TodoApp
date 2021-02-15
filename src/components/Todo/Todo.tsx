import React from 'react';
import styled from 'styled-components';
import { StyledProps } from './../../types';
import Button from '../Button/Button';

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
  flex-direction: row;
  * {
    vertical-align: middle;
  }
  &__check,
  &__edit {
    margin-right: 16px;
  }
  &__title {
    font-size: 1.5rem;
  }
  &__edit {
    margin-left: auto;
  }
`;

export const Todo = StyledComponent;
