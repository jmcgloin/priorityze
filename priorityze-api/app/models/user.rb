class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

	devise :database_authenticatable, :registerable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist

	has_many :goals, dependent: :destroy

	validates :username, :email, presence: true
	validates :username, :email, uniqueness: true
end
