# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  step       :string           not null
#  todo_id    :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  ord        :integer          not null
#  done       :boolean          default(FALSE)
#

class Step < ActiveRecord::Base
  validates :step, :todo_id, :ord, presence: true

  belongs_to :todo

end
