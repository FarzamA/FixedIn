class AddLikeableToLikes < ActiveRecord::Migration[5.2]
  def change
    add_reference :likes, :likeable, polymorphic: true
    rename_column :likes, :liker_id, :user_id 
    remove_column :likes, :liked_post_id
    add_index :likes, [:user_id, :likeable_type, :likeable_id], unique: true
  end
end
