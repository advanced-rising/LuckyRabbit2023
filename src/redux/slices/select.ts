import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SelectState {
  pack: string;
  money: string;
}

const initialState: SelectState = {
  pack: '',
  money: '',
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectPackAndMoney: (state, action) => {
      state.money = action.payload.moeny;
      state.pack = action.payload.pack;
    },
  },
});

export const { selectPackAndMoney } = selectSlice.actions;

export const selectSelect = (state: RootState) => state.select;

export default selectSlice.reducer;
