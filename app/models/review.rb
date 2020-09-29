# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  product_id :integer          not null
#  title      :string           not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :user_id, :product_id, :title, :body, :rating, presence: true
    validates :title, exclusion: {in: ['Title'], message: ": Please add a title."}
    validates :body, exclusion: {in: ['Describe your experience!'], message: ": Please add your experience."}

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end
