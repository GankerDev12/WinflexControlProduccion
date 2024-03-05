import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { winflexApi } from "../api";

export const useFabricanteStore = () => {
  const dispatch = useDispatch();

  const { fabricantes } = useSelector(state => state.fabricantes);
  const { user } = useSelector(state => state.state.auth);

  const startSavingFabricante = async (fabricante) => {
    try {
      if (fabricante.id) {
        //Actualizando
        await winflexApi.put(`/fabricantes/${fabricante.id}`, fabricante);
        dispatch(onUpdateFabricante({ ...fabricante, user }))
      }
      //Creando
      const { data } = await winflexApi.post('/fabricantes', fabricante);
      dispatch(onAddNewFabricante({ ...fabricante, id: data.fabricante.id, user }));

    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
  }

  return (
    
  )
}

