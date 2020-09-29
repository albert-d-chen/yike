# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  category     :string           not null
#  price        :float            not null
#  color        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  gender       :string
#  size         :string
#
class Product < ApplicationRecord
    validates :product_name, :category, :description, :price, :size, :color, presence:true
    validates :gender, presence:true

    # has_one_attached :photo
    has_many_attached :photos

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: :CartItem
    
    has_many :reviews,
        foreign_key: :product_id,
        class_name: :Review
end
