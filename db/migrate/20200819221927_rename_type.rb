class RenameType < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :type, :category
  end
end
