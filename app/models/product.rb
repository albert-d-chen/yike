class Product < ApplicationRecord
    validates :product_name, :category, :description, :price, :size, :color, presence:true
    validates :gender, inclusion: {in: %w(M F)}

    # has_one_attached :photo
    has_many_attached :photos
end
