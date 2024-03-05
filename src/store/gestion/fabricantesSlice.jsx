import { createSlice } from '@reduxjs/toolkit';

export const fabricantesSlice = createSlice({
    name: 'fabricantes',
    initialState: {
        isloadingFabricantes: true,
        fabricantes: []
    },
    reducers: {
         
    },
});

export const { openSidebar, closeSidebar, onOpenModal, onCloseModal, showForm, setForm } = uiSlice.actions;