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

    has_one_attached :avatar

    has_one_attached :bg

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

    def self.search(query)
        User.where("concat_ws('', first_name, last_name) LIKE #{query}")
            .limit(10)
    end


    def self.login_errors(params)
        errors = {
            email: nil,
            password: nil
        }

        email = params[:email]
        password = params[:password]

        # email check
        unless email.empty? 
            emailArr = email.split('@')
            unless emailArr.length == 2 && emailArr[1] && emailArr[1].split('.').length == 2
                errors[:email] = 'Please enter a valid email'
            end
        else  
            errors[:email] = 'Please enter an email address'
        end
        
        # password check
        unless password.empty?
            errors[:password] = 'The password you provided must have at least 6 characters' if password.length < 6
        else  
            errors[:password] = 'Please enter a password'
        end

        # neither the password or email check triggered
        if errors.values.all?(nil)
            if User.find_by(email: email)
                errors[:password] = 'Incorrect password'
            else 
                errors[:email] = 'Email not found, have you signed up?'
            end
        end

        errors.values
    end


    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest) == password
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
