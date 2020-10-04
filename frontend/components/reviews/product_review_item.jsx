import React from 'react';
import StarRatings from 'react-star-ratings';

const ProductReviewItem = ({review, currentUser}) => {
    return (
      <div>
        <ul>
          <div>
            <i className="far fa-user-circle fa-4x"></i>
            <div>
              {review.first_name} {review.last_name[0]}.
            </div>
          </div>
          <div>
            <h1>{review.title}</h1>
            <StarRatings
              rating={parseFloat(review.rating)}
              ignoreInlineStyles={false}
              starDimension="15px"
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starSpacing="1px"
            />
            <div>{review.body}</div>
          </div>
        </ul>
      </div>
    );
}

export default ProductReviewItem;