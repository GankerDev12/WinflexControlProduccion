import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { winflexApi } from "../../api/index";
import { onAddNewOperador, onDeleteOperador, onLoadOperadores, onUpdateOperador } from '../../store/gestion';
import { useUiStore } from '../useUiStore';

export const useOperadorStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { closeModal } = useUiStore()

  const startSavingOperador = async (operador) => {
    try {
      if (operador.id) {
        //Actualizando
        await winflexApi.put(`/operadores/${operador.id}`, operador);
        dispatch(onUpdateOperador({ ...operador, user }))
        Swal.fire('Editado correctamente', operador.nombre, 'success');
        closeModal();
        return;
      }
      //Creando
      const { data } = await winflexApi.post('/operadores', operador);
      dispatch(onAddNewOperador({ ...data.operador, user }));
      Swal.fire('Agregado correctamente', data.operador.nombre, 'success');
      closeModal();
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  }

  const startDeletingOperador = async (id) => {
    try {
      await winflexApi.delete(`/operadores/${id}`);
      dispatch(onDeleteOperador(id));
      Swal.fire('Eliminado correctamente', '', 'success');
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data.msg, 'error');
    }
  }

  const startLoadingOperadores = async () => {
    try {
      const { data } = await winflexApi.get('/operadores');
      dispatch(onLoadOperadores(data));
    } catch (error) {
      console.log('Error cargando operadores');
      console.log(error);
    }
  }

  return {
    //*Métodos
    startSavingOperador,
    startDeletingOperador,
    startLoadingOperadores
  }
}
