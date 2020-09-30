import React from 'react';

const ProductReviewItem = ({review, currentUser}) => {
    return (
      <div>
        <ul>
          <div>{review.first_name} {review.last_name}</div>
          <h1>{review.title}</h1>
          <div>{review.body}</div>
          <div>{review.rating}</div>
        </ul>
      </div>
    );
}

export default ProductReviewItem;