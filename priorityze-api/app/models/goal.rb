class Goal < ApplicationRecord
  belongs_to :user
  has_many :steps

  validates :title, :importance, :deadline, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id }
end
