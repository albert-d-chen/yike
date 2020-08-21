class AddGender < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :gender, :string, limit: 1, null:false
  end
end
