import React from 'react'

const SizesAndRates = function() {

  const createRows = function() {
    return(rateData.map((item, i) => <tr key={i}><td>{item.size}</td><td>{item.rate}</td></tr>))
  }

  return(
    <div className='info-panel sizes-and-rates'>
      <table className='rate-size-table'>
        <thead>
          <tr>
            <td>Sizes</td>
            <td>Rent (per month)</td>
          </tr>
        </thead>
        <tbody>
          {createRows()}
        </tbody>
      </table>
    </div>
  )
}

const rateData = [
  {rate: 75, size: '7.5 x 7.5'},
  {rate: 87.5, size: '7.5 x 10'},
  {rate: 120, size: '7.5 x 15'},
  {rate: 100, size: '10 x 10'},
  {rate: 120, size: '10 x 12'},
  {rate: 130, size: '10 x 15'},
  {rate: 160, size: '15 x 15'},
]

export default SizesAndRates;