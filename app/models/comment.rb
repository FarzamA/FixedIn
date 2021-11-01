# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  like_count :integer          not null
#
class Comment < ApplicationRecord
    validates :body, :like_count, :user_id, :post_id, presence: true

    belongs_to :user 

    belongs_to :post 

    has_many :likes, as: :likeable, dependent: :destroy
end
