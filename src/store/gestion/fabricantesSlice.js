import { createSlice } from '@reduxjs/toolkit';

export const fabricantesSlice = createSlice({
    name: 'fabricantes',
    initialState: {
        isloadingFabricantes: false,
        fabricantes: [],
        editingId: '',
        errorMessage: undefined
    },
    reducers: {
        isloadingFabricantes: (state) => {
            state.isloadingFabricantes = true,
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
        onEditID: (state, { payload }) => {
            state.editingId = payload;
        },
        onDeleteFabricante: (state, { payload }) => {
            state.fabricantes = state.fabricantes.filter(fabricante => fabricante.id !== payload);
        },
        onLoadFabricantes: (state, { payload }) => {
            state.isloadingFabricantes = true;
            const dbFabricantes = payload.fabricantes
            dbFabricantes.forEach(fabricante => {
                const exists = state.fabricantes.some(dbFabricante => dbFabricante.id === fabricante.id);
                if (!exists) {
                    state.fabricantes.push(fabricante);
                }
            })
            state.isloadingFabricantes = false;
        },
        onLogoutApp: (state) => {
            state.isloadingFabricantes = false,
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
    onUpdateFabricante,
    onEditID
} = fabricantesSlice.actions;