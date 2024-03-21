import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { winflexApi } from "../../api/index";
import { onAddNewFabricante, onDeleteFabricante, onLoadFabricantes, onUpdateFabricante } from '../../store/gestion';
import { useUiStore } from '../useUiStore';

export const useFabricanteStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { closeModal } = useUiStore()

  const startSavingFabricante = async (fabricante) => {
    try {
      if (fabricante.id) {
        //Actualizando
        await winflexApi.put(`/fabricantes/${fabricante.id}`, fabricante);
        dispatch(onUpdateFabricante({ ...fabricante, user }))
        Swal.fire('Editado correctamente', fabricante.nombre, 'success');
        closeModal();
        return;
      }
      //Creando
      const { data } = await winflexApi.post('/fabricantes', fabricante);
      dispatch(onAddNewFabricante({ ...fabricante, user }));
      Swal.fire('Agregado correctamente', data.fabricante.nombre, 'success');
      closeModal();
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  }

  const startDeletingFabricante = async (id) => {
    try {
      await winflexApi.delete(`/fabricantes/${id}`);
      dispatch(onDeleteFabricante(id));
      Swal.fire('Eliminado correctamente', '', 'success');
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data.msg, 'error');
    }
  }

  const startLoadingFabricantes = async () => {
    try {
      const { data } = await winflexApi.get('/fabricantes');
      dispatch(onLoadFabricantes(data));
    } catch (error) {
      console.log('Error cargando fabricantes');
      console.log(error);
    }
  }

  return {
    //*Métodos
    startSavingFabricante,
    startDeletingFabricante,
    startLoadingFabricantes
  }
}
