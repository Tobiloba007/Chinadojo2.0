// app/store/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  details: any;
}

const initialState: CounterState = {
  count: 0,
  details: {},
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    setDetails(state, action: PayloadAction<any>) {
      state.details = action.payload;
    },
  },
});

export const { increment, decrement, reset, setCount, setDetails } = counterSlice.actions;
export default counterSlice.reducer;