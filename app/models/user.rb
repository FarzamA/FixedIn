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
    validates :email, :password_digest, :session_token, :first_name, :last_name, :location, :industry, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :posts, dependent: :destroy

    has_many :comments, dependent: :destroy 

    has_many :likes, dependent: :destroy

    has_many :experiences, dependent: :destroy 

    has_many :educations, dependent: :destroy

    has_many :sent_connects, 
        class_name: :Connection,
        foreign_key: :connector_id

    has_many :rec_connects, 
        class_name: :Connection,
        foreign_key: :connectee_id

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil 
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token 
        self.session_token ||= self.generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

end
