import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'
import { useAuthStore } from '../hooks'
import { useEffect } from 'react'
import { Loader } from '../components/index'
import { ExtrusionPage, ImpresionPage, SelladoPage, GestionPage, TotalExtrusionPage, TotalImpresionPage, TotalSelladoPage, DashboardPage } from '../dashboard/index'

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return (
      <div className='flex items-center justify-center h-screen' >
        <Loader />
      </div>
    )
  }

  return (
    <>
      <Routes>
        {
          // Rutas estaticas
          (status === 'not-authenticated')
            ? (
              <>
                <Route path='/auth/*' element={<LoginPage />} />
                <Route path='/auth/register' element={<RegisterPage />} />
                <Route path='/*' element={<Navigate to="/auth/login" />} />
              </>
            ) : (
              // Rutas dinamicas
              <>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/*' element={<Navigate to="/" />} />

                //*Extrusiones, Impresiones y Sellado
                <Route path='/extrusion' element={<ExtrusionPage />} />
                <Route path='/impresion' element={<ImpresionPage />} />
                <Route path='/sellado' element={<SelladoPage />} />

              //* Totales
                <Route path='/totalExtrusion' element={<TotalExtrusionPage />} />
                <Route path='/totalImpresion' element={<TotalImpresionPage />} />
                <Route path='/totalSellado' element={<TotalSelladoPage />} />

                //* Gestión
                <Route path='/gestion' element={<GestionPage />} />
              </>
            )

        }

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  )
}
