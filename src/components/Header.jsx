import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='px-20 pt-4 hidden xl:flex'>
      <Link to={'/'}>
        <img src={Logo} alt="" className='h-12' />
      </Link>

    </div>
  )
}

export default Header