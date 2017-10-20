import React from 'react'
import ReactGA from 'react-ga'

import YLogo from './Yelp_Launch.png'

const YelpLogo = () => {
  return (
    <div className='social-img-container'>
      <ReactGA.OutboundLink eventLabel='Click To Yelp' to='https://www.yelp.com/biz/at-home-climate-storage-longview?osq=Climate+Controlled+Storage'>
        <img className='social-img' src={YLogo} alt='Visit At Home Climate Storage on Yelp' />
      </ReactGA.OutboundLink>
    </div>
  )
}

export default YelpLogo