import { createSlice } from '@reduxjs/toolkit';

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    selectedAge: null,
  },
  reducers: {
    setAge: (state, action) => {
      state.selectedAge = action.payload;
    },
  },
});

export const { setAge } = ageSlice.actions;

export default ageSlice.reducer;
