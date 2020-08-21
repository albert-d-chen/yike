import * as ProdAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const PRODUCT_RECEIVE_ERRORS = 'PRODUCT_RECEIVE_ERRORS';

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})


export const receiveProductErrors = errors => ({
    type: PRODUCT_RECEIVE_ERRORS,
    errors
})

export const getProduct = productId => dispatch => (
    ProdAPIUtil.getProduct(productId)
        .then((product) => (dispatch(receiveProduct(product))),
        err => dispatch(receiveProductErrors(err.responseJSON)))
)

export const getProducts = () => dispatch => (
    ProdAPIUtil.getProducts()
        .then((products) => (dispatch(receiveProducts(products))),
        err => dispatch(receiveProductErrors(err.responseJSON)))
)

export const getProductsByCategory = (category) => dispatch => (
    ProdAPIUtil.getProductsByCategory(category)
        .then(products => (dispatch(receiveProducts(products))),
        err => dispatch(receiveProductErrors(err.responseJSON)))
)
