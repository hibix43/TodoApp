import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { TabContent, Todo } from '../../types';
import { Tabs } from '../Tabs';
import { TodoList } from '../TodoList';

const TAB_TITLES = ['All', 'Unchecked Todos', 'Checked Todos'] as const;

type Props = {
  index: number;
  contents: TabContent[];
};

const Component: React.VFC<Props> = ({ index, contents }) => {
  return <Tabs selectedTabIndex={index} contents={contents} />;
};

const StyledComponent = styled(Component)``;

const Container: React.VFC = () => {
  const todos = useSelector<RootState, Todo[]>((state) => state.todo.todos);
  const currentTabIndex = useSelector<RootState, number>(
    (state) => state.tab.currentIndex
  );

  const allTodos = todos;
  const uncheckedTodos = todos.filter((todo) => !todo.checked);
  const checkedTodos = todos.filter((todo) => todo.checked);
  const showTodosOptions = [allTodos, uncheckedTodos, checkedTodos];

  const tabContents = TAB_TITLES.map((title, index) => ({
    index,
    title,
    content: <TodoList todos={showTodosOptions[index]} />
  }));

  return <StyledComponent index={currentTabIndex} contents={tabContents} />;
};

export const TodoListTabs = Container;
