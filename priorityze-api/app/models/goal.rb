class Goal < ApplicationRecord
  belongs_to :user
  has_many :steps, dependent: :destroy

  validates :title, :importance, :deadline, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id }

  scope :most_important, -> { where("importance = ?", Goal.maximum("importance")) }
  scope :due_soonest, -> { where("deadline = ?", Goal.minimum("deadline")) }
	# scope :from_shelter_called, -> (shelter_name) { joins(:shelters).where("shelter_name = ?", shelter_name) }
end
