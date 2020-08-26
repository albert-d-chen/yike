export const selectProductsInCart = (cartItems, products) => {
    let cartItemsArray = Object.values(cartItems);
    let cartProductIds = cartItemsArray.map(cartItem => (
        cartItem.product_id
    ))

    let productsArray = Object.values(products);
    let productIds = productsArray.filter(product => 
        cartProductIds.includes(product.id) 
    )
    return productIds;
}