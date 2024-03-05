import { configureStore } from "@reduxjs/toolkit";
import { authSlice, uiSlice } from ".";
import { gestionSlice } from "./gestion/gestionSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        fabricantes: fabricantesSlice.reducer,
        maquinas: maquinasSlice.reducer,
        operadores: operadoresSlice.reducer,
        productos: productosSlice.redurcer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});