import React from 'react'
import { Link } from 'react-router-dom'

const LoginHeader = () => {
  return (
    <header className='fixed w-full py-5 shadow-sm'>
      <div className='container'>
        <nav className='flex items-end'>
          <Link to='/login'>
            <div className='px-5 text-3xl text-blue-500'>Logo</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default LoginHeader
