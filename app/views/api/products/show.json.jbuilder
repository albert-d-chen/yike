json.partial! 'api/products/product', product: @product

json.photoUrls @product.photos.map {|photo| url_for(photo)}



json.reviews do 
    @product.reviews.each do |review|
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review 
            json.first_name review.user.first_name 
            json.last_name review.user.last_name 
        end
    end
end