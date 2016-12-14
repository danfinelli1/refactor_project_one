class CreateLanguages < ActiveRecord::Migration[5.0]
  def change
    create_table :languages do |t|
      t.string :name
      t.string :questions, array: true, default: []

      t.timestamps
    end
  end
end
