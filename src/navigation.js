import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = function() {
  return(
    <div className="navigation-content">
      <Link to='Rates'>Size & Rate Information</Link>
      <Link to='Location'>Location & Map</Link>
    </div>
  )
}

export default Navigation