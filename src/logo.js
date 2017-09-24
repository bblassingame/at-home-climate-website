import React from 'react'
import { Link } from 'react-router-dom'
import logoMain from './logo-main.jpg'

const Logo = function() {
  return(
    <div className="logo-content">
      <Link to='/'>
        <img className="img-fill" src={logoMain} alt='The logo for At Home Climate Storage in Longview, TX'/>
      </Link>
    </div>
  )
}

export default Logo