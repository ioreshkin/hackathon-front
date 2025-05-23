import {IFlat} from '../utils/types.ts';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getStatuses} from '../services/devicesService.ts';

export const fetchStatuses = createAsyncThunk(
    'flats/fetchStatuses', async () => {
      return await getStatuses().then(res => res);
    });

interface IFlatSlice {
  flats: IFlat[];
}

const initialState: IFlatSlice = {
  flats: []
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatuses.fulfilled, (state, action:PayloadAction<IFlat[]>) => {
        state.flats = action.payload;
      });
  }
});