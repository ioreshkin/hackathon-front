import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getEmergencyReport} from '../services/devicesService.ts';
import {IEmergencyReport} from '../utils/types.ts';

export const fetchEmergencyReport = createAsyncThunk(
    'reports/fetchEmergencyReport', async () => {
      return await getEmergencyReport().then(res => res);
    });

interface IReportsSlice {
  emergencyReport: IEmergencyReport | undefined;
  dailyReports: []
}

const initialState: IReportsSlice = {
  emergencyReport: undefined,
  dailyReports: []
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchEmergencyReport.fulfilled, (state, action:PayloadAction<IEmergencyReport>) => {
          state.emergencyReport = action.payload;
        });
  },
});