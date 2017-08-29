import React from 'react'
import { Route } from 'react-router-dom'

import Logo from './logo'
import FeaturesAndNav from './features-nav'
import SizesAndRates from './sizes-rates'
import MapAndLocation from './map-location'
import Contact from './contact'

const AppContent = function() {
  return(
    <div className="app-content">
      <Logo />
      <Route exact path='/' component={FeaturesAndNav} />
      <Route path='/Rates' component={SizesAndRates} />
      <Route path='/Location' component={MapAndLocation} />
      <Contact />
    </div>
  )
}

export default AppContent;