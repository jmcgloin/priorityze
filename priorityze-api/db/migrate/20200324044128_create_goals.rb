class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string :title
      t.integer :importance
      t.boolean :completed
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamp :deadline

      t.timestamps
    end
  end
end
