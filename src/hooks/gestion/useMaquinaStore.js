import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { winflexApi } from "../../api/index";
import { onAddNewMaquina, onDeleteMaquina, onLoadMaquinas, onUpdateMaquina } from '../../store/gestion';
import { useUiStore } from '../useUiStore';

export const useMaquinaStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const { closeModal } = useUiStore()

  const startSavingMaquina = async (maquina) => {
    try {
      if (maquina.id) {
        //Actualizando
        await winflexApi.put(`/maquinas/${maquina.id}`, maquina);
        dispatch(onUpdateMaquina({ ...maquina, user }))
        Swal.fire('Editado correctamente', maquina.nombre, 'success');
        closeModal();
        return;
      }
      //Creando
      const { data } = await winflexApi.post('/maquinas', maquina);
      dispatch(onAddNewMaquina({ ...data.maquina, user }));
      Swal.fire('Agregado correctamente', data.maquina.nombre, 'success');
      closeModal();
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  }

  const startDeletingMaquina = async (id) => {
    try {
      await winflexApi.delete(`/maquinas/${id}`);
      dispatch(onDeleteMaquina(id));
      Swal.fire('Eliminado correctamente', '', 'success');
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data.msg, 'error');
    }
  }

  const startLoadingMaquinas = async () => {
    try {
      const { data } = await winflexApi.get('/maquinas');
      dispatch(onLoadMaquinas(data));
    } catch (error) {
      console.log('Error cargando máquinas');
      console.log(error);
    }
  }

  return {
    //*Métodos
    startSavingMaquina,
    startDeletingMaquina,
    startLoadingMaquinas
  }
}
