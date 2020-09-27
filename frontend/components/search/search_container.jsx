import {connect} from 'react-redux';
import {getProducts} from '../../actions/product_actions';

import SearchProducts from './search_index';

const mapSTP = (state) => ({
    products: Object.values(state.entities.products)
})

const mapDTP = dispatch => ({
    getProducts: () => dispatch(getProducts()),
})

export default connect(mapSTP, mapDTP)(SearchProducts)