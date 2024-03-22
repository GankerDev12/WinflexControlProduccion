import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { winflexApi } from "../../api/index";
import { onAddNewProducto, onDeleteProducto, onLoadProductos, onUpdateOperador, onUpdateProducto } from '../../store/gestion';
import { useUiStore } from '../useUiStore';

export const useProductoStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { closeModal } = useUiStore()

  const startSavingProducto = async (producto) => {
    try {
      if (producto.id) {
        //Actualizando
        await winflexApi.put(`/productos/${producto.id}`, producto);
        dispatch(onUpdateProducto({ ...producto, user }))
        Swal.fire('Editado correctamente', producto.descripcion, 'success');
        closeModal();
        return;
      }
      //Creando
      const { data } = await winflexApi.post('/productos', producto);
      dispatch(onAddNewProducto({ ...data.producto, user }));
      Swal.fire('Agregado correctamente', data.producto.descripcion, 'success');
      closeModal();
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  }

  const startDeletingProducto = async (id) => {
    try {
      await winflexApi.delete(`/productos/${id}`);
      dispatch(onDeleteProducto(id));
      Swal.fire('Eliminado correctamente', '', 'success');
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data.msg, 'error');
    }
  }

  const startLoadingProductos = async () => {
    try {
      const { data } = await winflexApi.get('/productos');
      dispatch(onLoadProductos(data));
    } catch (error) {
      console.log('Error cargando prodcutos');
      console.log(error);
    }
  }

  return {
    //*Métodos
    startSavingProducto,
    startDeletingProducto,
    startLoadingProductos
  }
}
