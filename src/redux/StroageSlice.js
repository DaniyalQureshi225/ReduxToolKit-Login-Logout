import {createSlice} from '@reduxjs/toolkit';

const storageSlice = createSlice({
  name: 'storage',
  initialState: {value: null},
  initialCount: {count: 0},
  reducers: {
    setItem: (state, action) => {
      state.value = action.payload;
    },
    removeItem: state => {
      state.value = null;
    },
    increment: state => {
      state.count += 1;
    },
    decriment: state => {
      if (state.count == 0) {
        state.count == 0;
      } else {
        state.count -= 1;
      }
    },
  },
});

export const {setItem, removeItem, increment, decriment} = storageSlice.actions;
export default storageSlice.reducer;
