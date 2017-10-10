import React from 'react'

import RatingsIcon from './ratings-icon.png'
import RatingsIconGold from './ratings-icon-gold.png'

const Ratings = () => {
  return (
    <div className='mc-sub-panel'>
      <img className='mc-sub-panel-img' src={RatingsIcon} alt='a star image representing a section that displays user reviews' />
      <div className='mc-sub-panel-header-container'>
        <h1 className='mc-sub-panel-header'>Ratings</h1>
        <div>
          <div className='ratings-name-row'>
            <p>K Thornton</p>
            <div className='ratings-star-container'>
              <img className='img-fill' src={RatingsIconGold} alt='a star image representing 1 of 5 total stars a reviewer can give on a review' />
              <img className='img-fill' src={RatingsIconGold} alt='a star image representing 2 of 5 total stars a reviewer can give on a review' />
              <img className='img-fill' src={RatingsIconGold} alt='a star image representing 3 of 5 total stars a reviewer can give on a review' />
              <img className='img-fill' src={RatingsIconGold} alt='a star image representing 4 of 5 total stars a reviewer can give on a review' />
              <img className='img-fill' src={RatingsIconGold} alt='a star image representing 5 of 5 total stars a reviewer can give on a review' />
            </div>
          </div>
          <p className='ratings-title'>Great Value and Awesome Customer Service</p>
          <p className='ratings-comment'>They have multi size units and will work with you if you lease over two units. They also offer electronic transfer for the monthly fee. Good customer service if any issue should arise.</p>
        </div>
      </div>
    </div>
  )
}

const ratingsData = [
  {
    ID: 1,
    reviewerName: 'K Thornton', 
    rating: 5, 
    title: 'Great Value and Awesome Customer Service', 
    comment: 'They have multi size units and will work with you if you lease over two units. They also offer electronic transfer for the monthly fee. Good customer service if any issue should arise.', 
    date: '20140311'
  },
  {
    ID: 2,
    reviewerName: 'Debbie Helbig', 
    rating: 5, 
    title: 'Good price for large storage area', 
    comment: 'We rented a 7.5\' x 10\' unit which was quite ample for the amount of stuff that we had to store. The price per month was excellent for a climate controlled facility. Security at the facility seemed very good. The owners were very friendly and very helpful.', 
    date: '20170507'
  },
  {
    ID: 3,
    reviewerName: 'Melissa A. Harris', 
    rating: 5, 
    title: '', 
    comment: 'Best place for cleanliness and climate control.  Ashly Lloyd so easy to work with on maintaining our rental contracts and payments.  We rented for years!', 
    date: '20170721'
  },
]

export default Ratings