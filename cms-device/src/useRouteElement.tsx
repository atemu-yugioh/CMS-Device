import { useContext } from 'react'
import { Navigate, Outlet, useLocation, useRoutes } from 'react-router-dom'
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
import Device from './pages/Cms/pages/Device'
import { isAccessRoute, isFullAccess } from './utils/utils'
import Permission from './pages/System/pages/Permission'
import { useQuery } from '@tanstack/react-query'
import accessControlApi from './apis/accessControl.api'
import { Permission as IPermission } from './types/permission.type'

const ProtectedRoute = () => {
  const { isAuthenticated, profile } = useContext(AppContext)
  // lấy route name từ url
  const { pathname } = useLocation()
  const routeName = `/${pathname.split('/')[1]}`

  // gọi api lấy thông tin permission của 1 access control dựa vào route name
  const { data: accessControlResponse } = useQuery({
    queryKey: ['detail-access-control', routeName],
    queryFn: () => accessControlApi.getDetailACLByRouteName({ route: routeName })
  })

  // trích xuất thông tin permission của route từ response trả về
  let permissionRoute: IPermission[] = []
  if (accessControlResponse?.data.data) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    permissionRoute = [...accessControlResponse?.data.data.permissions]
  }

  // chưa đăng nhập => login
  if (!isAuthenticated) {
    return <Navigate to={path.login} />
  }

  // login: true && profile: true ==> check access outlet
  if (profile) {
    if (isFullAccess(profile?.permissions) || isAccessRoute(profile?.permissions, permissionRoute)) {
      return <Outlet />
    }
  }

  // không có quyền vào access control => dashboard
  return <Navigate to={path.dashboard} />
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
      element: <MainLayout />,

      children: [
        {
          path: path.systems,
          element: <SystemRoute />,
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
        },
        {
          path: '',
          element: <ProtectedRoute />,
          children: [
            {
              path: path.dashboard,
              element: (
                // <MainLayout>
                <DashBoard title='Dashboard' />
                // </MainLayout>
              )
            },
            {
              path: path.cms,
              children: [
                {
                  path: path.device,
                  element: <Device />
                }
              ]
            },
            {
              path: '/smart-home',
              element: (
                // <MainLayout>
                <DashBoard title='Smart Home' />
                // </MainLayout>
              )
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
