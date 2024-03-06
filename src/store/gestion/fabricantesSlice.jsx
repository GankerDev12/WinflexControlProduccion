import { createSlice } from '@reduxjs/toolkit';

export const fabricantesSlice = createSlice({
    name: 'fabricantes',
    initialState: {
        isloadingFabricantes: true,
        fabricantes: [],
        errorMessage: undefined
    },
    reducers: {
        isloadingFabricantes: (state) => {
            state.status = true,
                state.user = {},
                state.errorMessage = undefined;
        },
    },
});

export const { isloadingFabricantes } = fabricantesSlice.actions;