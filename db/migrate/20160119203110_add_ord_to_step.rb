class AddOrdToStep < ActiveRecord::Migration
  def change
    add_column :steps, :ord, :integer
    change_column :steps, :ord, :integer, null: false
  end
end
