json.cart_items do 
    @cart_items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :user_id, :product_id, :quantity
        end
    end
end


json.products do 
    @cart_items.each do |item|
        json.set! item.product.id do 
            json.extract! item.product, :id, :product_name, :category, :description, :price, :size, :color, :gender
            json.photoUrls item.product.photos.map {|photo| url_for(photo)}
        end
    end
end