import React from 'react'

import StorageIcon from './storage-icon-2.png'

const Units = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={StorageIcon} alt='storage unit icon' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Storage Units</h1>
        <div>
          <div>
            <p className='units-dim-row'> {/*padding: 0 0 2px*/}
              <span className='units-dimensions'>7.5' x 10'</span> {/*display: inline-block; width 8em; */}
              <span>$75.00</span> {/**/}
            </p>
          </div>
          <div>
            <p className='units-info-container'> {/*font-size: .75em*/}
              <span className='units-info-availability'>Available</span> {/*display: inline-block; width 8em; font-style: italic*/}
              <span>7th month free & no administrative fee with 6 month lease and online reservation</span> {/**/}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Units