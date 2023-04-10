import { createSlice } from '@reduxjs/toolkit';
import { ElementType } from 'react';
import { RootState } from '../store';

export interface UiState {
  openedModals: { Component: ElementType; props: any }[];
}

const initialState: UiState = {
  openedModals: [],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const { Component, props } = action.payload;
      state.openedModals = [...state.openedModals, { Component, props }];
    },
    closeModal: (state, action) => {
      const { Component } = action.payload;
      state.openedModals = state.openedModals.filter((modal) => modal.Component !== Component);
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;

export const selectUi = (state: RootState) => state.ui;

export default uiSlice.reducer;
