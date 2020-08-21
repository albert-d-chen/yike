# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Product.delete_all

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

# product1 = Product.create!(
#     product_name: 'Kobe Elite 7',
#     description: 'Everything negative - pressure, challenges - is all an opportunity for me to rise.',
#     price: 200,
#     category: 'basketball',
#     color: 'black',
#     size: 10,
#     gender: 'M',
# )
# file1 = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeelite7.jpg')
# product1.photo.attach(io: file1, filename: 'kobeelite7.jpg')


# product2 = Product.create!(
#     product_name: 'Kobe Elite 9',
#     description: "I don't want to be the next Michael Jordan, I only want to be Kobe Bryant.",
#     price: 350,
#     category: 'basketball',
#     color: 'black',
#     size: 10,
#     gender: 'M',
# )
# file2 = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeelite9.jpg')
# product2.photo.attach(io: file2, filename: 'kobeelite9.jpg')

# product3 = Product.create!(
#     product_name: 'Kobe Elite 11',
#     description: "These young guys are playing checkers. I'm out there playing chess.",
#     price: 350,
#     category: 'running',
#     color: 'red',
#     size: 10,
#     gender: 'M',
# )
# file3 = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeelite11.jpg')
# product3.photo.attach(io: file3, filename: 'kobeelite11.jpg')


# product4 = Product.create!(
#     product_name: 'Kobe 8 (WTK)',
#     description: "What the Kobe.",
#     price: 900,
#     category: 'casual',
#     color: 'orange',
#     size: 10,
#     gender: 'M',
# )

# file4 = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobewtk8.png')
# product4.photo.attach(io: file4, filename: 'kobewtk8.png')

# product5 = Product.create!(
#     product_name: 'Kobe Air Max 3',
#     description: "Winning takes precedence overall. There’s no gray area. No almosts.",
#     price: 150,
#     category: 'casual',
#     color: 'white',
#     size: 7,
#     gender: 'F',
# )

# file5 = open('https://yike-dev.s3-us-west-1.amazonaws.com/Wkobeairmax3.jpg')
# product5.photo.attach(io: file5, filename: 'Wkobeairmax3.png')







product6 = Product.create!(
    product_name: 'Kobe V ProTro',
    description: "When we are saying this cannot be accomplished, this cannot be done, then we are short-changing ourselves. My brain, it cannot process failure. It will not process failure.",
    price: 240,
    category: 'casual',
    color: 'purple',
    size: 10,
    gender: 'M',
)

file6a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobevprotro5a.jpg')
product6.photos.attach(io: file6a, filename: 'kobevprotro5a.jpg')
file6b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobevprotro5b.jpg')
product6.photos.attach(io: file6b, filename: 'kobevprotro5b.jpg')
file6c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobevprotro5c.jpg')
product6.photos.attach(io: file6c, filename: 'kobevprotro5c.jpg')
file6d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobevprotro5d.jpg')
product6.photos.attach(io: file6d, filename: 'kobevprotro5d.jpg')

product7 = Product.create!(
    product_name: 'Kobe Adapt Tie-Dye',
    description: "Winning takes precedence overall. There’s no gray area. No almosts.",
    price: 300,
    category: 'basketball',
    color: 'white',
    size: 10,
    gender: 'M',
)

file7a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeadapttiedyeA.jpg')
product7.photos.attach(io: file7a, filename: 'kobeadapta.jpg')
file7b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeadapttiedyeB.jpg')
product7.photos.attach(io: file7b, filename: 'kobeadaptb.jpg')
file7c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeadapttiedyeC.jpg')
product7.photos.attach(io: file7c, filename: 'kobeadaptc.jpg')
file7d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeadapttiedyeD.jpg')
product7.photos.attach(io: file7d, filename: 'kobeadaptd.jpg')

product8 = Product.create!(
    product_name: 'Kobe Infinity',
    description: "I don't want to be the next Michael Jordan, I only want to be Kobe Bryant.",
    price: 170,
    category: 'running',
    color: 'black',
    size: 10,
    gender: 'M',
)

file8a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityA.jpg')
product8.photos.attach(io: file8a, filename: 'kobeinfinitya.jpg')
file8b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityA.jpg')
product8.photos.attach(io: file8b, filename: 'kobeinfinityb.jpg')
file8c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityA.jpg')
product8.photos.attach(io: file8c, filename: 'kobeinfinityc.jpg')
file8d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityA.jpg')
product8.photos.attach(io: file8d, filename: 'kobeinfinityd.jpg')