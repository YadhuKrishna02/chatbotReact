// redux/dateAndTimeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'nameInput',
  initialState: {
    selectedName: null,
  },
  reducers: {
    setSelectedName: (state, action) => {
      state.selectedName = action.payload;
    },
  },
});

export const { setSelectedName } = nameSlice.actions;

export default nameSlice.reducer;
