render() {
    const products = this.props.products;

    return (
        <div className='index-body'>
            <div className='product-filter'>
                <div>
                    <div className='mini-header'>All / Shoes</div>
                    <div className='max-header'>All Shoes</div>
                </div>

                <div className='sort'>
                    <div className='collection-sort'>
                        <div>Filter</div>
                    </div>
                </div>
            </div>

            <div className='products'>
                <div key={product.id} className='product-card'>
                    <div className='product-image'>
                        <Link to={`/products/${product.id}`}><img className='image' src={product.photoUrls ? product.photoUrls[0] : null} ></img></Link>
                        <div className='product-info'>
                            <div className='product-price'>
                                <Link to={`/products/${product.id}`} className='index-link'>{product.product_name}</Link>
                                <div>${product.price}</div>
                            </div>
                            <div className='product-category'>{product.gender}&nbsp;{product.category}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}