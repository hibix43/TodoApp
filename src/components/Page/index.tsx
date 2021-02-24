import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { StyledProps, TabContent, Todo } from '../../types';
import Input from '../Input';
import { Tabs } from '../Tabs';
import { TodoList } from '../TodoList';

type Props = {
  tabIndex: number;
  contents: TabContent[];
};

const Component: React.VFC<Props & StyledProps> = ({
  className,
  tabIndex,
  contents
}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h1>Todo App</h1>
        <label>
          <Input type="text" placeholder="new todo title" />
        </label>
        <Tabs selectedTabId={tabIndex} contents={contents} />
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

const Container: React.VFC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todo.todos);
  const tabIndex = useSelector<RootState, number>(
    (state) => state.tab.currentIndex
  );
  const tabContents = [
    { id: 0, title: 'All', content: <TodoList todos={todos} /> },
    {
      id: 1,
      title: 'Unchecked Todo',
      content: <TodoList todos={todos.filter((todo) => !todo.checked)} />
    },
    {
      id: 2,
      title: 'Checked Todo',
      content: <TodoList todos={todos.filter((todo) => todo.checked)} />
    }
  ];
  return <StyledComponent tabIndex={tabIndex} contents={tabContents} />;
};

export const Page = Container;
