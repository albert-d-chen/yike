# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  cart_id    :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :product_id, cart_id, presence: true 
    validates :quantity, presence: true 

    belongs_to :cart,
        foreign_key: :cart_id,
        class_name: :ShoppingCart
    
    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
