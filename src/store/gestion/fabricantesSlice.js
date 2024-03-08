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
        onLoadFabricantes: (state, { payload = [] }) => {
            state.isloadingFabricantes = false;
            payload.forEach(fabricante => {
                const exists = state.fabricantes.some(dbFabricante => dbFabricante.id === fabricante.id);
                if (!exists) {
                    state.fabricantes.push(fabricante);
                }
            })
        },
        onLogoutApp: (state) => {
            state.isloadingFabricantes = true,
                state.fabricantes = []
        }

    },
});

export const {
    isloadingFabricantes,
    onAddNewFabricante,
    onDeleteFabricante,
    onLoadFabricantes,
    onLogoutApp,
    onUpdateFabricante
} = fabricantesSlice.actions;