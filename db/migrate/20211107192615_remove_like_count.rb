class RemoveLikeCount < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :like_count
    remove_column :posts, :like_count
  end
end
