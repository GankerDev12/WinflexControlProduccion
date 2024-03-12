import { createSlice } from '@reduxjs/toolkit';

export const maquinasSlice = createSlice({
    name: 'maquinas',
    initialState: {
        isloadingMaquinas: true,
        maquinas: [],
        errorMessage: undefined
    },
    reducers: {
        isloadingMaquinas: (state) => {
            state.isloadingMaquinas = true,
                state.errorMessage = undefined
        },
        onAddNewMaquina: (state, { payload }) => {
            state.maquinas.push(payload);
        },
        onUpdateMaquina: (state) => {
            state.maquinas = state.maquinas.map(maquina => {
                if (maquina.id === payload.id) {
                    return payload
                }
                return maquina;
            });
        },
        onDeleteMaquina: (state) => {
            state.maquinas = state.maquinas.filter(fabricante => fabricante.id);
        },
        onLoadMaquinas: (state, { payload }) => {
            state.isloadingMaquinas = true;
            const dbMaquinas = payload.maquinas;
            dbMaquinas.forEach(maquina => {
                const exists = state.fabricantes.some(dbMaquinas => dbMaquinas.id === maquina.id);
                if (!exists) {
                    state.fabricantes.push(maquina);
                }
            });
            state.isloadingMaquinas = false;
        },
        onLogoutApp: (state) => {
            state.isloadingMaquinas = false;
            state.fabricantes = []
        }
    },
});

export const {
    isloadingMaquinas,
    onAddNewMaquina,
    onDeleteMaquina,
    onLoadMaquinas,
    onLogoutApp,
    onUpdateMaquina
} = maquinasSlice.actions;