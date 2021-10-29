# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  headline        :string           not null
#  location        :string           not null
#  industry        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    # validates :email, :password_digest, :session_token, :first_name, :last_name, :location, :industry, presence: true
    # validates :email, :session_token, uniqueness: true
    # validates :password, length { minimum: 6, allow_nil: true }

    # # after_initialize COME BACK TO THIS

    # attr_reader :password

    # has_many :posts, dependent: :destroy

    # has_many :comments, dependent: :destroy 

    # has_many :likes, dependent: :destroy

    # has_many :experiences, depndent: :destroy 

    # has_many :educations, depndent: :destroy

    # has_many :sent_connects, 
    #     class_name: 
    #     foreign_key: :connector_id

    # has_many :rec_connects, 
    #     class_name: 
    #     foreign_key: :connectee_id

    

end
