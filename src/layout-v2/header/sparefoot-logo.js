import React from 'react'
import ReactGA from 'react-ga'

import SFLogo from './Squarefoot_Logo.png'

const SparefootLogo = () => {
  return (
    <div className='social'>
      <ReactGA.OutboundLink eventLabel='Click To Sparefoot' to='https://www.sparefoot.com/Longview-TX-self-storage/At-Home-Climate-Storage-153722.html'>
        <img className='img-fill' src={SFLogo} alt='Visit At Home Climate Storage on Sparefoot' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default SparefootLogo