import React from 'react'
import { Route } from 'react-router-dom'

import gaTracker from '../ga-tracker'

import Header from './header'
import MainContent from './main-content'
import Footer from './footer'
import MapAndLocation from '../map-location'

const AppContent2 = function() {

  return (
    <div className='app-content'>
      <Header />
      <Route exact path='/' component={gaTracker(MainContent)} />
      <Route path='/Location' component={gaTracker(MapAndLocation)} />
      <Footer />
    </div>
  )
}

export default AppContent2