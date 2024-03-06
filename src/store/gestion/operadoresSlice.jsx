import { createSlice } from '@reduxjs/toolkit';

export const operadoresSlice = createSlice({
    name: 'operadores',
    initialState: {
        isloadingOperadores: true,
        operadores: [],
    },
    reducers: {

    },
});

export const { } = operadoresSlice.actions;