import React from 'react'
import logo from '../utils/logo.jpg'
import "../App.css";


const Header = () => {
  return (
    <div style={{height:'4rem' }}>
      <header>
       
        <img src={logo} alt="" className='header-img' style={{}} />
      </header>
    </div>
  )
}

export default Header
