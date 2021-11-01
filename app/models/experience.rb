# == Schema Information
#
# Table name: experiences
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  title           :string           not null
#  company         :string           not null
#  location        :string
#  start_date      :date
#  end_date        :date
#  industry        :string
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  employment_type :string
#
class Experience < ApplicationRecord
    validates :title, :company, presence: true

    belongs_to :user
end
