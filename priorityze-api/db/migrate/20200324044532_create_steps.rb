class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.string :metric
      t.boolean :completed, default: false
      t.belongs_to :goal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
