import {combineSlices, configureStore} from '@reduxjs/toolkit';
import {notificationSlice} from '../slices/notificationSlice.ts';
import {reportsSlice} from '../slices/reportsSlice.ts';
import {flatsSlice} from '../slices/flatsSlice.ts';

const rootReducer = combineSlices(
    notificationSlice,
    reportsSlice,
    flatsSlice
);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;