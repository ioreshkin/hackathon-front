import {INotification, ISettings} from '../utils/types.ts';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getNotifications} from '../services/devicesService.ts';

export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications', async () => {
  return await getNotifications().then(res => res);
});

interface INotificationSlice {
  notifications: INotification[],
  countOfUnchecked: number,
  settings: ISettings,
}

const initialState: INotificationSlice = {
  notifications: [],
  countOfUnchecked: 0,
  settings: {
    hum: true,
    temp: true,
    co2: true,
    lux: true,
    airIaq: true
  }
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    checkNotifications: (state) => {
      state.countOfUnchecked = 0;
    },
    setSettings: (state, action:PayloadAction<ISettings>) => {
      state.settings = action.payload;
    }
  }, extraReducers: (builder) => {
    builder
        .addCase(fetchNotifications.fulfilled, (state, action:PayloadAction<INotification[]>) => {
          state.notifications = [...state.notifications, ...action.payload];
          state.countOfUnchecked += action.payload.length;
        });
  }
});