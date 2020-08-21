class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null:false
      t.text :description, null:false 
      t.string :type, null:false 
      t.float :price, null:false 
      t.integer :size, null:false 
      t.string :color, null:false 
      
      t.timestamps
    end
  end
end
