import React from 'react';
import ProductReviewItem from './product_review_item'
import StarRatings from 'react-star-ratings';

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
        averageRating = 0;
    }
    return (
        <div>
            <div className='review-index-header'>Reviews ({ratingsLength})
                    <div className='review-index-ratings'>
                        <StarRatings 
                            rating={parseFloat(averageRating)}
                            ignoreInlineStyles={false}
                            starDimension='20px'
                            starRatedColor='gold'
                            numberOfStars={5}
                            name='rating'
                            starSpacing='1px'
                        />
                    </div>

            </div>
            <div>
                
            </div>
            <h2></h2>
            {reviewsSort.map(review => (
                <ProductReviewItem key={review.id} review={review} currentUserId={currentUserId}/>
            ))}
        </div>
    )
}

export default ProductReviewIndex;