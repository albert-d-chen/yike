import {connect} from 'react-redux';
import ReviewIndex from './reviews_index';
import {fetchReviews, deleteReview} from '../../actions/review_actions';
import {getProducts} from '../../actions/product_actions';

const mapSTP = (state) => ({
    products: state.entities.products,
    reviews: Object.values(state.entities.reviews),
    currentUserID: state.session.id
})

const mapDTP = dispatch => ({
    fetchReviews: () => dispatch(fetchReviews()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    getProducts: () => dispatch(getProducts())
})

export default connect(mapSTP, mapDTP)(ReviewIndex);