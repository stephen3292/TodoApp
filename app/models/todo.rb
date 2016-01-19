# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  done       :boolean          default(FALSE)
#  created_at :datetime
#  updated_at :datetime
#

class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  has_many :steps

  # after_save :toggle_steps
  #
  # def toggle_steps
  #   if self.done
  #     self.steps.each do |step|
  #       step.done = true
  #       step.save!
  #     end
  #   end
  # end

end
