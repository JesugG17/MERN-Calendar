import { Route, Routes, Navigate } from 'react-router'
import { LoginPage } from '../modules/auth'
import { CalendarPage } from '../modules/calentar'

export const AppRouter = () => {

    const authStatus =  false  //'not-authenticated';

  return (
    <Routes>

        {
            (!authStatus)
            ? <Route path='/auth/*' element={ <LoginPage /> } />
            : <Route path='/*' element={ <CalendarPage /> } />
        }
        
        <Route path='/*' element={ <Navigate to='/auth/login' />} />
    </Routes>
  )
}
