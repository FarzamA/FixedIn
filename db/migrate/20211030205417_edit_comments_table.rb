class EditCommentsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :like_count, :integer, null: false 
  end
end
