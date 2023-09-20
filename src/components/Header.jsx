import React from 'react'
import logo from '../utils/logo.jpg'

const Header = () => {
  return (
    <div style={{height:'4rem' }}>
      <header>
       
        <img src={logo} alt="" style={{width:'12%',mixBlendMode:'multiply' ,marginTop:'-2rem',marginLeft:'4rem'}} />
      </header>
    </div>
  )
}

export default Header
