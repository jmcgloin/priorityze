class Step < ApplicationRecord
  belongs_to :goal

  validates :metric, :goal_id, presence: true
end
