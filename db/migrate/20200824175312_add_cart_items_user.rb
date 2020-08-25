class AddCartItemsUser < ActiveRecord::Migration[5.2]
  def change
    rename_column :cart_items, :cart_id, :user_id
    drop_table :shopping_carts
  end
end

