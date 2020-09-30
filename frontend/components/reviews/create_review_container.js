import {connect} from 'react-redux';
import CreateReviewForm from './create_review';
import {withRouter} from 'react-router-dom';
import { receiveReviewErrors, createReview } from '../../actions/review_actions';

const mapSTP = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.reviews,
    review: {
        user_id: state.session.id,
        product_id: ownProps.product.id,
        title: 'Title',
        body: 'Describe your experience!',
        rating: 0
    }
})

const mapDTP = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    receiveErrors: err => dispatch(receiveReviewErrors(err))
})

export default withRouter(connect(mapSTP, mapDTP)(CreateReviewForm));