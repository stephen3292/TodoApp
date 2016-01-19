class CreateStep < ActiveRecord::Migration
  def change
    create_table :steps do |t|

    t.string :step, null: false
    t.integer :todo_id, null: false 

    t.timestamps
    end
    add_index :steps, :todo_id
  end
end
