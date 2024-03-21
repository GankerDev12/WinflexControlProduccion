import { createSlice } from '@reduxjs/toolkit';

export const maquinasSlice = createSlice({
    name: 'maquinass',
    initialState: {
        isloadingMaquinas: false,
        maquinas: [],
        editingMaquinaId: '',
        errorMessage: undefined
    },
    reducers: {
        isloadingMaquinas: (state) => {
            state.isloadingMaquinas = true,
                state.errorMessage = undefined;
        },
        onAddNewMaquina: (state, { payload }) => {
            state.maquinas.push(payload);
        },
        onUpdateMaquina: (state, { payload }) => {
            state.maquinas = state.maquinas.map(maquina => {
                if (maquina.id === payload.id) {
                    return payload;
                }
                return maquina;
            });
        },
        onEditMaquinaId: (state, { payload }) => {
            state.editingMaquinaId = payload;
        },
        onDeleteMaquina: (state, { payload }) => {
            state.maquinas = state.maquinas.filter(maquina => maquina.id !== payload);
        },
        onLoadMaquinas: (state, { payload }) => {
            state.isloadingMaquinas = true;
            const dbMaquinas = payload.maquinas
            dbMaquinas.forEach(maquina => {
                const exists = state.maquinas.some(dbMaquina => dbMaquina.id === maquina.id);
                if (!exists) {
                    state.maquinas.push(maquina);
                }
            })
            state.isloadingMaquinas = false;
        },
        onLogoutApp: (state) => {
            state.isloadingMaquinas = false,
                state.maquinas = []
        }

    },
});

export const {
    isloadingMaquinas,
    onAddNewMaquina,
    onDeleteMaquina,
    onLoadMaquinas,
    onLogoutApp,
    onUpdateMaquina,
    onEditMaquinaId
} = maquinasSlice.actions;