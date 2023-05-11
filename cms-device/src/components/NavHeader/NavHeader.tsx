import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import Button from '../Button'
import authApi from 'src/apis/auth.api'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

const NavHeader = () => {
  const { setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const handleLogout = () => {
    logoutMutation.mutate()
  }

  const logoutMutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      setProfile(null)
    }
  })

  return (
    <header className='py-5 shadow-md'>
      <div className='container'>
        <nav className='flex items-center justify-between'>
          <div>
            <Link to='/login'>
              <div className='px-5 text-xl text-blue-500'>Click to dashboard</div>
            </Link>
          </div>

          <div>
            <Link to={path.dashboard} className='mx-4 font-bold text-slate-500'>
              {profile?.full_name}
            </Link>
            <Button onClick={handleLogout} className='mx-4 font-bold text-slate-500 hover:text-blue-500'>
              Logout
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavHeader
