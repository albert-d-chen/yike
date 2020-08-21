json.partial! 'api/products/product', product: @product

json.photoUrls @product.photos.map {|photo| url_for(photo)}



