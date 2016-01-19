class AddDoneToStep < ActiveRecord::Migration
  def change
    add_column :steps, :done, :boolean
    change_column :steps, :done, :boolean, default: false
    add_index :steps, [:todo_id, :ord], unique: true

  end
end
