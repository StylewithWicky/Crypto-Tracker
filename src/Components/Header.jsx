import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import '../Styles/Header.css'
function Header() {
  return (
    <div className='Header'>
        <Logo />
        <Searchbar />
    </div>
  )
}

export default Header