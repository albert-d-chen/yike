@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :product_name, :category, :description, :price, :size, :color, :gender
        json.photoUrls product.photos.map {|photo| url_for(photo)}
    end
end


