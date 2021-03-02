import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Todo } from './types';

export type State = {
  todos: Todo[];
};

const initialState: State = {
  todos: []
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state: State, action: PayloadAction<string>) => {
      const newTodo = { id: nanoid(), title: action.payload, checked: false };
      state.todos.push(newTodo);
    },
    changeChecked: (state: State, action: PayloadAction<string>) => {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);
      if (targetTodo && !targetTodo.checked) {
        targetTodo.checked = true;
      }
    },
    changeTitle: (
      state: State,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const targetTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (targetTodo) {
        targetTodo.title = action.payload.title;
      }
    },
    deleteTodo: (state: State, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const {
  addTodo,
  changeChecked,
  changeTitle,
  deleteTodo
} = slice.actions;
export const todoReducer = slice.reducer;
