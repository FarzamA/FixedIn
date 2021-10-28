# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :integer          not null
#  liked_post_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord

end
