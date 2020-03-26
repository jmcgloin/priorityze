# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({
		username: "jmcg", email: "j@son.com", password: "password"
})


g1 = Goal.create({
	title: "Finish final project", importance: 10, deadline: Date.new(2020,3,30), user: user
})
g2 = Goal.create({
	title: "Clean my office", importance: 8, deadline: Date.new(2020,4,10), user: user
})
g3 = Goal.create({
	title: "Clean my car", importance: 6, deadline: Date.new(2020,4,30), user: user
})
g4 = Goal.create({
	title: "Repair the stairs", importance: 9, deadline: Date.new(2020,4,20), user: user
})


s1 = Step.create({
	metric: "Api finished", goal: g1
})
s2 = Step.create({
	metric: "Client finished", goal: g1
})
s3 = Step.create({
	metric: "Remove everything that doesn't belong", goal: g2
})
s4 = Step.create({
	metric: "Put away everything else", goal: g2
})


