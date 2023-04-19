import { createSlice } from '@reduxjs/toolkit';
import { PackColors } from 'types/Packs';
import { RootState } from '../store';

export interface SelectState {
  pack: PackColors | undefined;
  money: number | undefined;
}

const initialState: SelectState = {
  pack: undefined,
  money: undefined,
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    selectPackAndMoney: (state, action) => {
      console.log('action', action.payload);
      state.money = action.payload.selectMoney;
      state.pack = action.payload.selectPack;
    },
  },
});

export const { selectPackAndMoney } = selectSlice.actions;

export const selectSelect = (state: RootState) => state.select;

export default selectSlice.reducer;
