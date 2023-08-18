import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
      setDarkModeG: (state, action) => action.payload
    }
})

export const { setDarkModeG } = darkModeSlice.actions;

export default darkModeSlice.reducer;
