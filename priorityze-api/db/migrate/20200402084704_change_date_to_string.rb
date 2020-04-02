class ChangeDateToString < ActiveRecord::Migration[6.0]
  def change
  	change_column :goals, :deadline, :string
  end
end
