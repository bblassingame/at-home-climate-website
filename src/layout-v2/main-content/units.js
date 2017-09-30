import React from 'react'

import StorageIcon from './storage-icon-2.png'

const Units = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={StorageIcon} alt='storage unit icon' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Storage Units</h1>
        <p>multi-line storage</p>
        <p>unit content go here</p>
      </div>
    </div>
  )
}

export default Units