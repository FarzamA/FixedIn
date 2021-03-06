# == Schema Information
#
# Table name: connections
#
#  id           :bigint           not null, primary key
#  connector_id :integer          not null
#  connectee_id :integer          not null
#  accepted     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Connection < ApplicationRecord

    belongs_to :connector, 
        class_name: :User

    belongs_to :connectee,
        class_name: :User
         
end
