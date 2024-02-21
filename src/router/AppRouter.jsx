import { Navigate, Route, Routes } from 'react-router-dom'
import { Loginpage, RegisterPage } from '../auth'
import { DashboardPage } from '../dashboard/pages/DashboardPage'
import { useAuthStore } from '../hooks'
import { useEffect } from 'react'
import { Loader } from '../components/index'
import { ExtrusionPage } from '../dashboard/pages/ExtrusionPage'
import { GestionPage } from '../dashboard/pages/gestion/Gestion'

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
          (status === 'not-authenticated')
            ? (
              <>
                <Route path='/auth/*' element={<Loginpage />} />
                <Route path='/auth/register' element={<RegisterPage />} />
                <Route path='/*' element={<Navigate to="/auth/login" />} />
              </>
            ) : (
              <>
                <Route path='/' element={<DashboardPage />} />
                <Route path='/*' element={<Navigate to="/" />} />

                //*Extrusiones, Impresiones y Sellado
                <Route path='/extrusion' element={<ExtrusionPage />} />

              //* Totales


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
