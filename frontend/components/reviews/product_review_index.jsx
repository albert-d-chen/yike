import React from 'react';
import ProductReviewItem from './product_review_item'

const ProductReviewIndex = ({reviews, currentUserId}) => {
    const reviewsSort = reviews.reverse();
    let total = 0;
    let ratingsLength = reviews.length
    reviews.forEach(review => {
        total += review.rating
    })
    let averageRating;
    if (ratingsLength > 0) {
        averageRating = Number.parseFloat(total / ratingsLength).toFixed(1);
    } else {
        averageRating = null;
    }
    return (
        <div>
            <h1>{averageRating} Reviews ({ratingsLength})</h1>
            <h2></h2>
            {reviewsSort.map(review => (
                <ProductReviewItem key={review.id} review={review} currentUserId={currentUserId}/>
            ))}
        </div>
    )
}

export default ProductReviewIndex;