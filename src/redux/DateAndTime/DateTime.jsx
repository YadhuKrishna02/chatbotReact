import { createSlice } from '@reduxjs/toolkit';

const dateAndTimeSlice = createSlice({
  name: 'dateAndTime',
  initialState: {
    selectedDateTime: null,
  },
  reducers: {
    setSelectedDateTime: (state, action) => {
      state.selectedDateTime = action.payload;
    },
  },
});

export const { setSelectedDateTime } = dateAndTimeSlice.actions;

export default dateAndTimeSlice.reducer;
