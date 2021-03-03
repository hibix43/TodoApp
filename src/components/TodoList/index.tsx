import React from 'react';
import { StyledProps, Todo } from '../../types';
import { TodoItem } from '../TodoItem';
import { TodoItemEmpty } from '../TodoItem/TodoItemEmpty';

type Props = {
  todos: Todo[];
};

const Component: React.VFC<Props & StyledProps> = ({ className, todos }) => {
  return todos.length > 0 ? (
    <div className={className}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          check={todo.checked}
        />
      ))}
    </div>
  ) : (
    <TodoItemEmpty />
  );
};

export const TodoList = Component;
