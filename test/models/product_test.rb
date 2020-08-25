# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :text             not null
#  category     :string           not null
#  price        :float            not null
#  size         :integer          not null
#  color        :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  gender       :string
#
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
