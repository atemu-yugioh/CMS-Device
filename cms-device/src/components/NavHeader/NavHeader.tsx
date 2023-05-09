import { Link } from 'react-router-dom'
import path from 'src/constants/path'

const NavHeader = () => {
  return (
    <header className='py-5 shadow-md'>
      <div className='container'>
        <nav className='flex items-center justify-between'>
          <div>
            <Link to='/login'>
              <div className='px-5 text-xl text-blue-500'>search input</div>
            </Link>
          </div>
          <div>
            <Link to={path.dashboard} className='mx-4 font-bold text-slate-500'>
              username
            </Link>
            <Link to={path.logout} className='mx-4 font-bold text-slate-500 hover:text-blue-500'>
              Logout
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavHeader
