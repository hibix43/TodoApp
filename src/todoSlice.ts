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
    }
  }
});

export const { addTodo, changeChecked } = slice.actions;
export const todoReducer = slice.reducer;
