import React from 'react'

import Logo from './logo'
import Features from './features'
import Navigation from './navigation'
import Contact from './contact'

const FeaturesAndNav = function() {
  return(
    <div className="info-panel features-nav">
      <Features />
      <Navigation />
    </div>
  )
}

export default FeaturesAndNav;