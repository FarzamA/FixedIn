# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  like_count :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :body, :user_id, :like_count, presence: true

    belongs_to :user

    has_many :comments, dependent: :destroy

    has_many :likes, as: :likeable, dependent: :destroy

end
