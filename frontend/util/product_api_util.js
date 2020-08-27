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

export const updateProduct = (product) => (
    $.ajax({
        method: 'PATCH',
        url: `api/products/${product.id}`,
        data: {product}
    })
)