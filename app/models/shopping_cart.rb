# == Schema Information
#
# Table name: shopping_carts
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  checked_out :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ShoppingCart < ApplicationRecord
    validates :resolved, inclusion: {in: [false,true]}

    has_many :cart_items,
        class_name: :CartItem,
        foreign_key: :cart_id

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
