
import { createSlice } from '@reduxjs/toolkit';

export const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        isloadingProductos: false,
        productos: [],
        editingProductoId: '',
        errorMessage: undefined
    },
    reducers: {
        isloadingProductos: (state) => {
            state.isloadingProductos = true,
                state.errorMessage = undefined;
        },
        onAddNewProducto: (state, { payload }) => {
            state.productos.push(payload);
        },
        onUpdateProducto: (state, { payload }) => {
            state.productos = state.productos.map(producto => {
                if (producto.id === payload.id) {
                    return payload;
                }
                return producto;
            });
        },
        onEditProductoId: (state, { payload }) => {
            state.editingProductoId = payload;
        },
        onDeleteProducto: (state, { payload }) => {
            state.productos = state.productos.filter(producto => producto.id !== payload);
        },
        onLoadProductos: (state, { payload }) => {
            state.isloadingProductos = true;
            const dbProductos = payload.productos
            dbProductos.forEach(producto => {
                const exists = state.productos.some(dbProducto => dbProducto.id === producto.id);
                if (!exists) {
                    state.productos.push(producto);
                }
            })
            state.isloadingProductos = false;
        },
        onLogoutApp: (state) => {
            state.isloadingFabricantes = false,
                state.fabricantes = []
        }

    },
});

export const {
    isloadingProductos,
    onAddNewProducto,
    onDeleteProducto,
    onLoadProductos,
    onLogoutApp,
    onUpdateProducto,
    onEditProductoId
} = productosSlice.actions;