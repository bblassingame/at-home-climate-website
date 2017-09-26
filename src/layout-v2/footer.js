import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className='footer-content'>
      <div>
        <p className='footer-base'>
          <Link to='/Location'>Find us on Google Maps...</Link>
        </p>
      </div>
      <div>
        <p className="footer-base footer-text">2000 Jahan Trail, Longview TX  75604</p>
      </div>
      <div>
        <p className="footer-base footer-subtext">Located near McWhorter Park</p>
      </div>
    </div>
  )
}

export default Footer