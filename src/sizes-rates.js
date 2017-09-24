import React from 'react'

const SizesAndRates = function() {

  // takes an item and returns a table cell for the size colum
  // example:  item.length = 10, item.width = 12   result = <td>10 x 12</td>
  const getSizeCell = function(item) {
    return <td>{formatSize(item.length, item.width)}</td>
  }

  // function takes a width and a length and converts them to a '<length> x <width>' format
  // example:  length = 10, width = 10   result = '10 x 10
  const formatSize = function(length, width) {
    return formatDimension(length) + ' x ' + formatDimension(width)
  }

  // function takes a dimension and converts the decimal portion to a vulgar fraction
  // we only support .5 -> ½ right now
  // example:  7.5 -> 7½
  const formatDimension = function(dimension) {
    let numericalParts = (dimension + '').split('.') // split at the '.' separate the integer and decimal
    let formattedDimension = numericalParts[0] // set the initial integer portion
    if( numericalParts.length > 1 ) { // check if there is actually a fractional part
      formattedDimension += '\u00bd' // append the vulgar fraction if needed
    }
    return formattedDimension
  }

  // takes an item and returns a table cell for the size column
  // example:  item.rate = 80   result = <td>'\u0024'80.<sup>00</sup></td>
  const getRateCell = function(item) {
    let value = parseFloat(item.rate).toFixed(2) // convert the value to a 2 decimal float
    let numericalParts = (value).split('.') // split at the '.' separate the integer and decimal
    return (
      <td>
        {'\u0024' + numericalParts[0] + '.'}<sup>{numericalParts[1]}</sup>
      </td>
    )
  }

  const createRows = function() {
    return(rateData.map((item, i) => {
      return (
        <tr key={i}>
          {getSizeCell(item)}
          {getRateCell(item)}
        </tr>
      )
    }))
  }

  return(
    <div className='info-panel sizes-and-rates'>
      <table className='rate-size-table'>
        <thead className='rate-size-table-header'>
          <tr>
            <td className='sizes-header'>Sizes (ft)</td>
            <td className='rent-header'>Rent (per month)</td>
          </tr>
        </thead>
        <tbody className='rate-size-table-body'>
          {createRows()}
        </tbody>
      </table>
    </div>
  )
}

const rateData = [
  {rate: 75, length: 7.5, width: 10},
  {rate: 90, length: 10, width: 10},
  {rate: 120, length: 10, width: 15},
]

export default SizesAndRates