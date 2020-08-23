class ChangeGender < ActiveRecord::Migration[5.2]
  def change
        remove_column :products, :gender, :string, limit: 1, null:false
        add_column :products, :gender, :string

  end
end
