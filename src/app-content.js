import React from 'react'
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga'

import gaTracker from './ga-tracker'

import Logo from './logo'
import FeaturesAndNav from './features-nav'
import SizesAndRates from './sizes-rates'
import MapAndLocation from './map-location'
import Contact from './contact'

// ReactGA.initialize('UA-106318026-1',
//   {
//     debug: false,
//   }
// )

const AppContent = function() {

  // const logPageView = function() {
  //   console.log('AppContent->onUpdate->logPageView')
  //   ReactGA.set({ page: window.location.pathname + window.location.search })
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }

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