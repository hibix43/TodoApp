import React from 'react';
import styled from 'styled-components';
import { StyledProps } from '../../types';
import Input from '../Input';
import { Tabs } from '../Tabs';
import { TodoList } from '../TodoList';

// 仮データ
const TODOS = [
  { id: '0', title: 'Todo0', checked: false },
  { id: '1', title: 'Todo1', checked: false },
  { id: '2', title: 'Todo2', checked: true }
];
const TAB_CONTENTS = [
  { id: 0, title: 'All', content: <TodoList todos={TODOS} /> },
  {
    id: 1,
    title: 'Unchecked Todo',
    content: <TodoList todos={TODOS.filter((todo) => !todo.checked)} />
  },
  {
    id: 2,
    title: 'Checked Todo',
    content: <TodoList todos={TODOS.filter((todo) => todo.checked)} />
  }
];

// 本来なら Props や store で管理されるが今はやらない
const Component: React.VFC<StyledProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h1>Todo App</h1>
        <label>
          <Input type="text" placeholder="new todo title" />
        </label>
        <Tabs selectedTabId={1} contents={TAB_CONTENTS} />
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
  input {
    height: 3rem;
    width: 30%;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
    border: none;
  }
`;

// TODO: Container で todoSlice.todos と tabSlice.currentIndex から TodoList, TabContent を作成する

export const Page = StyledComponent;
