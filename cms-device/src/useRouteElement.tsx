import { useRoutes } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Login from './pages/Login'

const useRouteElement = () => {
  const routeElements = useRoutes([
    {
      path: '/login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElement
