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




product6 = Product.create!(
    product_name: 'Kobe V ProTro',
    description: "When we are saying this cannot be accomplished, this cannot be done, then we are short-changing ourselves. My brain, it cannot process failure. It will not process failure.",
    price: 240,
    category: 'Casual',
    color: 'purple',
    size: 10,
    gender: "Men's",
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
    category: 'Basketball',
    color: 'white',
    size: 10,
    gender: "Men's",
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
    category: 'Running',
    color: 'black',
    size: 10,
    gender: "Men's",
)

file8a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityA.jpg')
product8.photos.attach(io: file8a, filename: 'kobeinfinitya.jpg')
file8b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityB.jpg')
product8.photos.attach(io: file8b, filename: 'kobeinfinityb.jpg')
file8c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityC.jpg')
product8.photos.attach(io: file8c, filename: 'kobeinfinityc.jpg')
file8d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeinfinityD.jpg')
product8.photos.attach(io: file8d, filename: 'kobeinfinityd.jpg')


product9 = Product.create!(
    product_name: 'Kobe Air Force',
    description: "I'll do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game-winning shot.",
    price: 100,
    category: 'Casual',
    color: 'white',
    size: 7,
    gender: "Women's",
)

file9a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeairforceA.jpg')
product9.photos.attach(io: file9a, filename: 'Wkobeairforcea.jpg')
file9b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeairforceB.jpg')
product9.photos.attach(io: file9b, filename: 'Wkobeairforceb.jpg')
file9c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeairforceC.jpg')
product9.photos.attach(io: file9c, filename: 'Wkobeairforcec.jpg')
file9d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeairforceD.jpg')
product9.photos.attach(io: file9d, filename: 'Wkobeairforced.jpg')

product10 = Product.create!(
    product_name: 'Kobe Space Hippie',
    description: "Everything negative - pressure, challenges - is all an opportunity for me to rise.",
    price: 150,
    category: 'Running',
    color: 'pink',
    size: 7,
    gender: "Women's",
)

file10a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobespacehippieA.jpg')
product10.photos.attach(io: file10a, filename: 'Wkobespacehippiea.jpg')
file10b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobespacehippieB.jpg')
product10.photos.attach(io: file10b, filename: 'Wkobespacehippieb.jpg')
file10c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobespacehippieC.jpg')
product10.photos.attach(io: file10c, filename: 'Wkobespacehippiec.jpg')
file10d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobespacehippieD.jpg')
product10.photos.attach(io: file10d, filename: 'Wkobespacehippied.jpg')

product11 = Product.create!(
    product_name: 'Kobe Zoom',
    description: "If you're afraid to fail, then you're probably going to fail.",
    price: 200,
    category: 'Basketball',
    color: 'blue',
    size: 7,
    gender: "Women's",
)

file11a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobezoomA.jpg')
product11.photos.attach(io: file11a, filename: 'Wkobezooma.jpg')
file11b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobezoomB.jpg')
product11.photos.attach(io: file11b, filename: 'Wkobezoomb.jpg')
file11c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobezoomC.jpg')
product11.photos.attach(io: file11c, filename: 'Wkobezoomc.jpg')
file11d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobezoomD.jpg')
product11.photos.attach(io: file11d, filename: 'Wkobezoomd.jpg')