# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validate :ensure_content

    validates :body, :user_id, presence: true

    belongs_to :user

    has_many :comments, dependent: :destroy

    has_many :likes, as: :likeable, dependent: :destroy

    has_one_attached :media, dependent: :destroy

    def ensure_content
        unless self.body.length > 0 || self.media.attached?
          errors.add(:post, 'must have content')
        end
    end
end
