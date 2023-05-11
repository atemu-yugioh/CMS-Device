import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Login from './pages/Login'
import { AppContext } from './contexts/app.context'
import DashBoard from './pages/DashBoard'
import path from './constants/path'
import MainLayout from './layouts/MainLayout'
import AccessControl from './pages/System/pages/AccessControl'
import Employee from './pages/System/pages/Employee'
import Role from './pages/System/pages/Role'
import Department from './pages/System/pages/Department'
import Permission from './pages/System/pages/Permission'
import Device from './pages/Cms/pages/Device'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

const RejectedRoute = () => {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.dashboard} />
}

// Supper admin
const SystemRoute = () => {
  const { isAuthenticated, profile } = useContext(AppContext)
  return isAuthenticated && !profile?.roles.length ? <Outlet /> : <Navigate to={path.dashboard} />
}

const useRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <SystemRoute />,
      children: [
        {
          path: path.systems,
          element: <MainLayout></MainLayout>,
          children: [
            {
              path: path.accessControl,
              element: <AccessControl />
            },
            {
              path: path.employees,
              element: <Employee />
            },
            {
              path: path.roles,
              element: <Role />
            },
            {
              path: path.departments,
              element: <Department />
            },
            {
              path: path.permissions,
              element: <Permission />
            }
          ]
        }
      ]
    },

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
        },
        {
          path: path.cms,
          element: <MainLayout></MainLayout>,
          children: [
            {
              path: path.device,
              element: <Device />
            }
          ]
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
