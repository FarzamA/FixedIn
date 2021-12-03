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
#
class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true

    belongs_to :user 

    belongs_to :post 

    has_many :likes, as: :likeable, dependent: :destroy

    def ensure_content
        unless self.body.length > 0 || self.media.attached?
          errors.add(:post, 'must have content')
        end
    end

    def self.two_comments(post_id)
        comments = Comment.where(post_id: post_id)

        if comments 
            comments = comments.order(created_at: :desc)
                                .limit(2)
                                .includes(:user)
                                .includes(:likes)
                                # .includes(:comments)

            return comments
        else    
            return [];
        end
    end

    def self.more_comments(post_id, offset)
        comments = Comment.where(post_id: post_id)

        if comments 
            comments = comments.order(created_at: :desc)
                                .offset(offset * 10)
                                .limit(10)
                                .includes(:user)
                                .includes(:likes)
                                # .includes(:comments)

            return comments
        else   
            return [];
        end
    end
end
