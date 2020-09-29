import * as ReviewAPITUTIL from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const removeReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

export const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = () => dispatch => (
    ReviewAPITUTIL.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)),
        err => dispatch(receiveReviewErrors(err.response.JSON)))
)

export const createReview = review => dispatch => (
    ReviewAPITUTIL.createReview(review)
        .then(product => dispatch(receiveReviews(product.reviews)),
        err => dispatch(receiveReviewErrors(err.response.JSON)))
)

export const updateReview = review => dispatch => (
    ReviewAPITUTIL.updateReview(review)
        .then(reviews => dispatch(receiveReviews(reviews)),
        err => dispatch(receiveReviewErrors(err.response.JSON)))
)

export const deleteReview = reviewId => dispatch => (
    ReviewAPITUTIL.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)
