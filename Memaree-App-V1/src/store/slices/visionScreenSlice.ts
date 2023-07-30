import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    remembered: false,
};

const visionScreenSlice = createSlice({
    name: 'visionScreen',
    initialState,
    reducers: {
        setRemembered: (state, action) => {
            state.remembered = action.payload;
        },
    },
});

export const { setRemembered } = visionScreenSlice.actions;

export default visionScreenSlice.reducer;
