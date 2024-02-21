import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        toOpenSidebar: false,
        isModalOpen: false,
        setForm: { payload: "" }
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
        showForm: (state) => {
            state.setForm = state.payload
        }
    },
});

export const { openSidebar, closeSidebar, onOpenModal, onCloseModal, showForm } = uiSlice.actions;