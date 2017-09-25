import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className='footer'>
      <div>
        <p className='maps-link'>
          <Link to='/Location'>Find us on Google Maps...</Link>
        </p>
      </div>
      <div>
        <p className="address">2000 Jahan Trail, Longview TX  75604</p>
      </div>
      <div>
        <p className="location">Located near McWhorter Park</p>
      </div>
    </div>
  )
}

export default Footer