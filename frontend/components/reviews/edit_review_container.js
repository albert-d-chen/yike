import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchReviews, updateReview, receiveReviewErrors, deleteReview} from '../../actions/review_actions'
import {getProducts} from '../../actions/product_actions'

import EditReview from './edit_review';
import PreEditReview from './pre_edit_review'

const mapSTP = (state, ownProps) => ({
    review: state.entities.reviews[ownProps.match.params.id],
    products: state.entities.products,
    errors: state.errors.reviews
})

const mapDTP = dispatch => ({
    updateReview: (review) => dispatch(updateReview(review)),
    fetchReviews: () => dispatch(fetchReviews()),
    receiveReviewErrors: (errors) => dispatch(receiveReviewErrors(errors)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    getProducts: () => dispatch(getProducts())
})

export default withRouter(connect(mapSTP, mapDTP)(PreEditReview))