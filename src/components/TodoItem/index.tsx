import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledProps } from './../../types';
import Button from '../Button';
import { changeChecked, changeTitle, deleteTodo } from '../../todoSlice';
import { useDispatch } from 'react-redux';
import Input from '../Input';

type Props = {
  check: boolean;
  title: string;
  isModify: boolean;
  onClickCheck: React.MouseEventHandler<HTMLSpanElement>;
  onClickModify: React.MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: React.ChangeEventHandler<HTMLInputElement>;
  onEnterKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  check,
  title,
  isModify,
  onClickCheck,
  onClickModify,
  onChangeTitle,
  onEnterKeyPress,
  onClickDelete
}) => {
  return (
    // clsx で checked と unchecked のどちらかを付与する？ → checked ならボタンが押せない、色を暗くする
    <div className={`${className}`}>
      <span className={`${className}__main`} onClick={onClickCheck}>
        <Button
          className={`${className}__check`}
          imgUrl={
            check
              ? './assets/images/checked.svg'
              : './assets/images/unchecked.svg'
          }
        />
        {isModify ? (
          <Input
            className={`${className}__title`}
            value={title}
            onChange={onChangeTitle}
            onKeyPress={onEnterKeyPress}
          />
        ) : (
          <span className={`${className}__title`}>{title}</span>
        )}
      </span>
      {!isModify && (
        <Button
          className={`${className}__edit`}
          imgUrl={'./assets/images/edit.svg'}
          onClick={onClickModify}
        />
      )}
      <Button
        className={`${className}__delete`}
        imgUrl={'./assets/images/delete.svg'}
        onClick={onClickDelete}
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
    width: 100%;
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
  const [todoTitle, setTodoTitle] = useState(title);
  const [isModify, setIsModify] = useState(false);

  const dispatch = useDispatch();
  const handleClickCheck = () => {
    if (isModify) return;
    dispatch(changeChecked(id));
  };
  const handleClickDelete = () => dispatch(deleteTodo(id));
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoTitle(e.target.value);
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(changeTitle({ id, title: todoTitle }));
      setIsModify(false);
    }
  };
  const handleClickModify = () => {
    if (check) return;
    setIsModify(true);
  };

  return (
    <StyledComponent
      check={check}
      title={todoTitle}
      isModify={isModify}
      onClickCheck={handleClickCheck}
      onClickModify={handleClickModify}
      onChangeTitle={handleChangeTitle}
      onEnterKeyPress={handleEnterKeyPress}
      onClickDelete={handleClickDelete}
    />
  );
};

export const TodoItem = Container;
