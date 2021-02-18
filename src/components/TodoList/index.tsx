import React from 'react';
import { Todo } from '../../types';
import { TodoItem } from '../TodoItem';

type Props = {
  className?: string;
  todos: Todo[];
};

const Component: React.VFC<Props> = ({ className, todos }) => {
  return (
    <div className={className}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} check={todo.checked} />
      ))}
    </div>
  );
};

export const TodoList = Component;
