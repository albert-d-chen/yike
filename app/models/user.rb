class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true, length: {maximum: 30} 
    #format:{with:URI::MailTo::EMAIL_REGEXP}
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :first_name, presence:true
    validates :last_name, presence:true

    attr_reader :password
    after_initialize :ensure_session_token!

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        if @user && @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        return self.session_token
    end

    private
    def ensure_session_token!
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
