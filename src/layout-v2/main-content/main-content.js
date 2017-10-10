import React from 'react'

import Units from './units'
import Reserve from './reserve'
import Ratings from './ratings'
import Hours from './hours'

const MainContent = () => {
  return(
    <div className='main-content'>
      <Units />
      <Reserve />
      <Ratings />
      <Hours />
    </div>
  )
}

export default MainContent