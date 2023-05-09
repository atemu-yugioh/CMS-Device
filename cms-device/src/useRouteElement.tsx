import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Login from './pages/Login'
import { AppContext } from './contexts/app.context'
import DashBoard from './pages/DashBoard'
import path from './constants/path'
import MainLayout from './layouts/MainLayout'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.dashboard} />
}

const useRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.dashboard,
          element: (
            <MainLayout>
              <DashBoard />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: path.login,
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        }
      ]
    }
  ])

  return routeElements
}

export default useRouteElement
