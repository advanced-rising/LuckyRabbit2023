import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import uiReducer from './slices/ui';
import selectReducer from './slices/select';

// https://stackoverflow.com/questions/69978434/persist-reducer-function-giving-type-error-to-my-reducer-in-typescript
const rootReducer = combineReducers({
  ui: uiReducer,
  select: selectReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
