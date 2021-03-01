import React from 'react';
import styled from 'styled-components';
import { StyledProps } from './../../types';
import Button from '../Button';
import { changeChecked, deleteTodo } from '../../todoSlice';
import { useDispatch } from 'react-redux';

type Props = {
  check: boolean;
  title: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  onDeleteClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  check,
  title,
  onClick,
  onDeleteClick
}) => {
  return (
    // clsx で checked と unchecked のどちらかを付与する？ → checked ならボタンが押せない、色を暗くする
    <div className={`${className}`}>
      <span className={`${className}__main`} onClick={onClick}>
        <Button
          className={`${className}__check`}
          imgUrl={
            check
              ? './assets/images/checked.svg'
              : './assets/images/unchecked.svg'
          }
        />
        <span className={`${className}__title`}>{title}</span>
      </span>
      <Button
        className={`${className}__edit`}
        imgUrl={'./assets/images/edit.svg'}
      />
      <Button
        className={`${className}__delete`}
        imgUrl={'./assets/images/delete.svg'}
        onClick={onDeleteClick}
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
    word-break: break-all;
  }
  &__edit {
    margin-left: auto;
  }
  &__main {
    display: flex;
    align-items: center;
    width: 100%;
    margin-right: 8px;
  }
`;

type OwterProps = {
  id: string;
  check: boolean;
  title: string;
};

const Container: React.VFC<OwterProps> = ({ id, check, title }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(changeChecked(id));
  const handleDeleteClick = () => dispatch(deleteTodo(id));
  return (
    <StyledComponent
      check={check}
      title={title}
      onClick={handleClick}
      onDeleteClick={handleDeleteClick}
    />
  );
};

export const TodoItem = Container;
