import React from 'react';
import { StyledProps, Todo } from '../../types';
import { TodoItem } from '../TodoItem';

type Props = {
  todos: Todo[];
};

const Component: React.VFC<Props & StyledProps> = ({ className, todos }) => {
  // TODO: todos が empty であることを示す
  return (
    <div className={className}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} check={todo.checked} />
      ))}
    </div>
  );
};

export const TodoList = Component;
