import { createSlice } from '@reduxjs/toolkit';

export const gestionSlice = createSlice({
    name: 'productos',
    initialState: {
        isloadingProductos: true,
        productos: []
    },
    reducers: {
        openSidebar: (state) => {
            state.toOpenSidebar = true;
        },
        closeSidebar: (state) => {
            state.toOpenSidebar = false;
        },
        onOpenModal: (state) => {
            state.isModalOpen = true;
        },
        onCloseModal: (state) => {
            state.isModalOpen = false;
        },
        showForm: (state, action) => {
            state.setForm = action.payload
        }
    },
});

export const { openSidebar, closeSidebar, onOpenModal, onCloseModal, showForm, setForm } = uiSlice.actions;