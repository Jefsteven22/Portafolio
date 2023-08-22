import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
      setIsLoadingG: (state, action) => action.payload
    }
})

export const { setIsLoadingG } = loadingSlice.actions;

export default loadingSlice.reducer;
