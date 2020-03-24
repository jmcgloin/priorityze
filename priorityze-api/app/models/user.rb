class User < ApplicationRecord
	has_many :goals

	validates :username, :email, presence: true
	validates :username, :email, uniqueness: true
end
