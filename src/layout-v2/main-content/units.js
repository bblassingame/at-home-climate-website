import React from 'react'

import StorageIcon from './storage-icon-2.png'

const Units = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={StorageIcon} alt='storage unit icon indicating information about available storage units' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Storage Units</h1>
        <div className='units-entry-container'>
          <div>
            <p className='units-dim-row'>
              <span className='units-dimensions'>7.5' x 10'</span>
              <span>$75.00</span>
            </p>
          </div>
          <div className='units-info-container'>
            <p className='units-info-text'>
              <span className='units-info-availability'>Available</span>
              <span>7th month free & no administrative fee with 6 month lease and online reservation</span>
            </p>
          </div>
        </div>
        <div className='units-entry-container'>
          <div>
            <p className='units-dim-row'>
              <span className='units-dimensions'>10' x 10'</span>
              <span>$90.00</span>
            </p>
          </div>
          <div className='units-info-container'>
            <p className='units-info-text'>
              <span className='units-info-availability'>Available</span>
              <span>7th month free & no administrative fee with 6 month lease and online reservation</span>
            </p>
          </div>
        </div>
        <div className='units-entry-container'>
          <div>
            <p className='units-dim-row'>
              <span className='units-dimensions'>10' x 15'</span>
              <span>$120.00</span>
            </p>
          </div>
          <div className='units-info-container'>
            <p className='units-info-text'>
              <span className='units-info-availability'>Available</span>
              <span>7th month free & no administrative fee with 6 month lease and online reservation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const rateData = [
  {rate: 75, length: 7.5, width: 10},
  {rate: 90, length: 10, width: 10},
  {rate: 120, length: 10, width: 15},
]

export default Units