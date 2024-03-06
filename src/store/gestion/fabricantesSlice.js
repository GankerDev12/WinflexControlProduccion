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
        onAddNewFabricante: (state, { payload }) => {
            state.fabricantes.push(payload);
        },
        onUpdateFabricante: (state, { payload }) => {
            state.fabricantes = state.fabricantes.map(fabricante => {
                if (fabricante.id === payload.id) {
                    return payload;
                }
                return fabricante;
            });
        },
        onDeleteFabricante: (state) => {
            state.fabricantes = state.fabricantes.filter(fabricante => fabricante.id);
        },
        onLoadFabricantes: (state, {payload = []})=>{
            state.isloadingFabricantes = false;
            
        }

    },
});

export const { isloadingFabricantes } = fabricantesSlice.actions;