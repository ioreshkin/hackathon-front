import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getDailyReport, getEmergencyReport} from '../services/devicesService.ts';
import {IDailyReport, IEmergencyReport} from '../utils/types.ts';

export const fetchEmergencyReport = createAsyncThunk(
    'reports/fetchEmergencyReport', async () => {
      return await getEmergencyReport().then(res => res);
    });

export const fetchDailyReport = createAsyncThunk(
    'reports/fetchDailyReport', async () => {
      return await getDailyReport().then(res => res);
    }
);

interface IReportsSlice {
  emergencyReport: IEmergencyReport | undefined;
  dailyReports: IDailyReport[]
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
        })
        .addCase(fetchDailyReport.fulfilled, (state, action:PayloadAction<IDailyReport[]>) => {
          state.dailyReports = action.payload;
        });
  },
});