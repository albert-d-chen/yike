# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create!(
    first_name: 'Albert',
    last_name: 'Chen',
    email: 'alby@gmail.com',
    password: 'password;'
)

user2 = User.create!(
    first_name: 'Kobe',
    last_name: 'Bryant',
    email: '8kobe24@mamba.com',
    password: 'password'
)

