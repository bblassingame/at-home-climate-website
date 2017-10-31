import React from 'react'

import HeaderLogo from './header-logo'
import SquarefootLogo from './sparefoot-logo'
import YelpLogo from './yelp-logo'
import FacebookLogo from './facebook-logo'

const Header = () => {
  return (
    <div className='header-content'>
      <HeaderLogo />
      <div className='social-container'>
        <FacebookLogo />
        <YelpLogo />
        <SquarefootLogo />
      </div>
    </div>
  )
}

export default Header