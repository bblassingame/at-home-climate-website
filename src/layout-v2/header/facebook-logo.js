import React from 'react'
import ReactGA from 'react-ga'

import FBLogo from './FB-f-Logo__blue_50.png'

const FacebookLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Facebook' to='https://www.facebook.com/AtHomeClimateStorage/'>
        <img className='social-img' src={FBLogo} alt='Visit At Home Climate Storage on Facebook' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default FacebookLogo