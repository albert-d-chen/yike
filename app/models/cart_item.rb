# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  product_id :integer          not null
#  user_id    :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :product_id, :user_id, presence: true 
    validates :quantity, presence: true 

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
