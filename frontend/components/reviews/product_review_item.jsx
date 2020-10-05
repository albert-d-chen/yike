import React from 'react';
import StarRatings from 'react-star-ratings';
import moment from 'moment'

const ProductReviewItem = ({review, currentUser}) => {
    if (review.last_name === undefined) {
      return null;
    }
    return (
      <div className='review-index-container'>

          <div>
            <i className="far fa-user-circle fa-4x"></i>
            <div className='review-index-name'>
              {review.first_name} {review.last_name[0]}.
            </div>
            <div className='review-index-date'>
              {moment(review.created_at).format('M/D/YYYY')}
            </div>
          </div>
          <div className='review-index-info'>
            <div className='review-index-title'>{review.title}</div>
            <div className='review-index-rate'>
              <StarRatings
                rating={parseFloat(review.rating)}
                ignoreInlineStyles={false}
                starDimension="15px"
                starRatedColor="gold"
                numberOfStars={5}
                name="rating"
                starSpacing="1px"
              />
            </div>
            <div className='review-index-body'>{review.body}</div>
          </div>
  
      </div>
    );
}

export default ProductReviewItem;