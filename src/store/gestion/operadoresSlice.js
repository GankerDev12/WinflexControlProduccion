import { createSlice } from '@reduxjs/toolkit';

export const operadoresSlice = createSlice({
    name: 'operadores',
    initialState: {
        isloadingOperadores: true,
        operadores: [],
        editingOperadorId: '',
    },
    reducers: {
        isloadingOperadores: (state) => {
            state.isloadingOperadores = true,
                state.errorMessage = undefined;
        },
        onAddNewOperador: (state, { payload }) => {
            state.operadores.push(payload);
        },
        onUpdateOperador: (state, { payload }) => {
            state.operadores = state.operadores.map(operador => {
                if (operador.id === payload.id) {
                    return payload;
                }
                return operador;
            });
        },
        onEditOperadorId: (state, { payload }) => {
            state.editingOperadorId = payload;
        },
        onDeleteOperador: (state, { payload }) => {
            state.operadores = state.operadores.filter(operador => operador.id !== payload);
        },
        onLoadOperadores: (state, { payload }) => {
            state.isloadingOperadores = true;
            const dbOperadores = payload.operadores
            dbOperadores.forEach(operador => {
                const exists = state.operadores.some(dbOperador => dbOperador.id === operador.id);
                if (!exists) {
                    state.operadores.push(operador);
                }
            })
            state.isloadingOperadores = false;
        },
        onLogoutApp: (state) => {
            state.isloadingOperadores = false,
                state.operadores = []
        }

    }
});

export const {
    isloadingOperadores,
    onAddNewOperador,
    onDeleteOperador,
    onLoadOperadores,
    onLogoutApp,
    onUpdateOperador,
    onEditOperadorId } = operadoresSlice.actions;