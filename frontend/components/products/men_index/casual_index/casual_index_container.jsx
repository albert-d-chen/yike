import React from 'react';
import { connect } from 'react-redux';

import { getProducts, getProductsByType } from '../../../../actions/product_actions';
import CasualIndex from './casual_index';

const mapSTP = ({ entities: { products } }) => ({
    products: Object.values(products)
})

const mapDTP = dispatch => ({
    getProducts: products => dispatch(getProducts(products)),
})

export default connect(mapSTP, mapDTP)(CasualIndex);