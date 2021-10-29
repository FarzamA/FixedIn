# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  user_id       :integer
#  likeable_type :string
#  likeable_id   :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :user_id, uniqueness: { scope: [:likeable_type, :likeable_id] }

    belongs_to :user 

    belongs_to :likeable, polymorphic: true
end
