import React from 'react'
import { Route } from 'react-router-dom'

import gaTracker from './ga-tracker'

import Logo from './logo'
import FeaturesAndNav from './features-nav'
import SizesAndRates from './sizes-rates'
import MapAndLocation from './map-location'
import Contact from './contact'

const AppContent = function() {

  return(
    <div className="app-content">
      <Logo />
      <Route exact path='/' component={gaTracker(FeaturesAndNav)} />
      <Route path='/Rates' component={gaTracker(SizesAndRates)} />
      <Route path='/Location' component={gaTracker(MapAndLocation)} />
      <Contact />
    </div>
  )
}

export default AppContent