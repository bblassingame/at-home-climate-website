import React from 'react'
import { Route } from 'react-router-dom'

import gaTracker from '../ga-tracker'

import Header from './header/header'
import MainContent from './main-content/main-content'
import Footer from './footer/footer'
import MapAndLocation from '../map-location'

const AppContent2 = () => {

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