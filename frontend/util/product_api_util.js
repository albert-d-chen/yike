export const getProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products'
    })
)
export const getProduct = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
}

export const getProductsByCategory = (category) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products`,
        data: {category: category}
    })
}

