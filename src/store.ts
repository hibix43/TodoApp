import { tabReducer } from './tabSlice';
import { todoReducer } from './todoSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ todo: todoReducer, tab: tabReducer });

export type RootState = ReturnType<typeof rootReducer>;
export const store = configureStore({ reducer: rootReducer });
