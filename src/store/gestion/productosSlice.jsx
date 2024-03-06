import { createSlice } from '@reduxjs/toolkit';

export const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        isloadingProductos: true,
        productos: []
    },
    reducers: {
    },
});

export const { } = productosSlice.actions;