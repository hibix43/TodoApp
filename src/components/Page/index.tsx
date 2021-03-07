import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../../todoSlice';
import { StyledProps } from '../../types';
import Input from '../Input';
import { TodoListTabs } from '../TodoListTabs';

type Props = {
  inputValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onEnterKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  inputValue,
  onChange,
  onEnterKeyPress
}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h1>Todo App</h1>
        <Input
          type="text"
          placeholder="new todo title"
          value={inputValue}
          onChange={onChange}
          onKeyPress={onEnterKeyPress}
        />
        <TodoListTabs />
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  background-color: #333;
  padding: 2rem;
  &__inner {
    padding: 2rem;
    background-color: #62c8cf;
  }
  h1 {
    margin-top: 0;
  }
  &__inner > input {
    height: 3rem;
    width: 30%;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    border: none;
  }
`;

const Container: React.VFC = () => {
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };
  const onEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addTodo(newTodoTitle));
      setNewTodoTitle('');
    }
  };
  return (
    <StyledComponent
      inputValue={newTodoTitle}
      onChange={onChange}
      onEnterKeyPress={onEnterKeyPress}
    />
  );
};

export const Page = Container;
