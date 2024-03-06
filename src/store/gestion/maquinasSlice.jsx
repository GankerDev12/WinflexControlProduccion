import { createSlice } from '@reduxjs/toolkit';

export const maquinasSlice = createSlice({
    name: 'maquinas',
    initialState: {
        isloadingMaquinas: true,
        maquinas: [],
    },
    reducers: {
    },
});

export const { } = maquinasSlice.actions;