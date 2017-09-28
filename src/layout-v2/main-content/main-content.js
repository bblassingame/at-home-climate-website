import React from 'react'

import Units from './units'
import Reserve from './reserve'
import Ratings from './ratings'

const MainContent = () => {
  return(
    <div className='main-content'>
      <Units />
      <Reserve />
      <Ratings />
    </div>
  )
}

export default MainContent