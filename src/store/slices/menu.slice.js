import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: false,
    reducers: {
      setMenuG: (state, action) => action.payload
    }
})

export const { setMenuG } = menuSlice.actions;

export default menuSlice.reducer;
