import React from 'react'

import Units from './units'
import Reserve from './reserve'
import Ratings from './ratings'
import Operations from './operations'

const MainContent = () => {
  return(
    <div className='main-content'>
      <Units />
      <Reserve />
      <Operations />
      <Ratings />
    </div>
  )
}

export default MainContent