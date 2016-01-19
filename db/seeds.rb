# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Todo.destroy_all
a = Todo.create(title: "Title1", body: "Body1", done: false)
b = Todo.create(title: "Title2", body: "Body2", done: false)
c = Todo.create(title: "Title3", body: "Body3", done: false)
Todo.create(title: "Title4", body: "Body4", done: false)
Todo.create(title: "Title5", body: "Body5", done: false)
Todo.create(title: "Title6", body: "Body6", done: false)
Todo.create(title: "Title7", body: "Body7", done: false)
Todo.create(title: "Title8", body: "Body8", done: false)
Todo.create(title: "Title9", body: "Body9", done: false)

Step.destroy_all
Step.create(step: "Step1", todo_id: a.id, ord: 1)
Step.create(step: "Step2", todo_id: a.id, ord: 2)
Step.create(step: "Step3", todo_id: a.id, ord: 3)
Step.create(step: "Step4", todo_id: a.id, ord: 4)

Step.create(step: "Step1", todo_id: b.id, ord: 1)
Step.create(step: "Step2", todo_id: b.id, ord: 2)
Step.create(step: "Step3", todo_id: b.id, ord: 3)
Step.create(step: "Step4", todo_id: b.id, ord: 4)

Step.create(step: "Step1", todo_id: c.id, ord: 1)
Step.create(step: "Step2", todo_id: c.id, ord: 2)
Step.create(step: "Step3", todo_id: c.id, ord: 3)
Step.create(step: "Step4", todo_id: c.id, ord: 4)
