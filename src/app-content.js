import React from 'react'
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga'

import Logo from './logo'
import FeaturesAndNav from './features-nav'
import SizesAndRates from './sizes-rates'
import MapAndLocation from './map-location'
import Contact from './contact'

ReactGA.initialize('UA-106318026-1',
  {
    debug: false,
  }
)

const AppContent = function() {

  const logPageView = function() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return(
    <div className="app-content">
      <Logo />
      <Route exact path='/' onUpdate={logPageView} component={FeaturesAndNav} />
      <Route path='/Rates'onUpdate={logPageView}  component={SizesAndRates} />
      <Route path='/Location' onUpdate={logPageView} component={MapAndLocation} />
      <Contact />
    </div>
  )
}

export default AppContent;