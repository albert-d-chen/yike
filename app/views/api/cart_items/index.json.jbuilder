@cart_items.each do |item|
    json.set! item.id do 
        json.extract! item.product, :id, :product_name, :category, :description, :price, :size, :color, :gender
        json.photoUrls item.product.photos.map {|photo| url_for(photo)}
    end
end

