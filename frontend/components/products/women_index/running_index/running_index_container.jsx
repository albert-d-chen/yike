import React from 'react';
import { connect } from 'react-redux';

import { getProducts, getProductsByType } from '../../../../actions/product_actions';
import RunningIndex from './running_index';

const mapSTP = ({ entities: { products } }) => ({
    products: Object.values(products)
})

const mapDTP = dispatch => ({
    getProducts: products => dispatch(getProducts(products)),
})

export default connect(mapSTP, mapDTP)(RunningIndex);