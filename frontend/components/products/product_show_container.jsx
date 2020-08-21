import React from 'react';
import {connect} from 'react-redux';

import {getProducts, getProduct} from '../../actions/product_actions'
import ProductShow from './product_show';

const mapSTP = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.productId],
})

const mapDTP = (dispatch) => ({
    getProducts: products => dispatch(getProducts(products)),
    getProduct:  productId => dispatch(getProduct(productId))
})

export default connect(mapSTP, mapDTP)(ProductShow)