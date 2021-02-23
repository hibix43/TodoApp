import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  currentIndex: number;
};

const initialState: State = {
  currentIndex: 0
};

const slice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state: State, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    }
  }
});
