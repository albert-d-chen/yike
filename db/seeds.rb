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
    color: 'Purple',
    size: '10',
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
    color: 'White',
    size: '10',
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
    color: 'Black',
    size: '10',
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
    color: 'White',
    size: '7',
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
    color: 'Pink',
    size: '7',
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
    color: 'Blue',
    size: '7',
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

product12 = Product.create!(
    product_name: 'Kobe Air Precision Fly Ease',
    description: "I don't think a coach becomes the right coach until he wins a championship.",
    price: 250,
    category: 'Basketball',
    color: 'Black',
    size: '7',
    gender: "Men's",
)

file12a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeAirPrecisionFlyEase1a.jpg')
product12.photos.attach(io: file12a, filename: 'kobeAirPrecisionFlyEase1a.jpg')
file12b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeAirPrecisionFlyEase1b.jpg')
product12.photos.attach(io: file12b, filename: 'kobeAirPrecisionFlyEase1b.jpg')
file12c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeAirPrecisionFlyEase1c.jpg')
product12.photos.attach(io: file12c, filename: 'kobeAirPrecisionFlyEase1c.jpg')
file12d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeAirPrecisionFlyEase1d.jpg')
product12.photos.attach(io: file12d, filename: 'kobeAirPrecisionFlyEase1d.jpg')

product13 = Product.create!(
    product_name: 'Kobe Benassi JDI',
    description: "Sports are such a great teacher. I think of everything they've taught me: camaraderie, humility, how to resolve differences.",
    price: 50,
    category: 'Casual',
    color: 'White',
    size: '7',
    gender: "Men's",
)

file13a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBenassiJDI1a.jpg')
product13.photos.attach(io: file13a, filename: 'kobeBenassiJDI1a.jpg')
file13b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBenassiJDI1b.jpg')
product13.photos.attach(io: file13b, filename: 'kobeBenassiJDI1b.jpg')
file13c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBenassiJDI1c.jpg')
product13.photos.attach(io: file13c, filename: 'kobeBenassiJDI1c.jpg')
file13d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBenassiJDI1d.jpg')
product13.photos.attach(io: file13d, filename: 'kobeBenassiJDI1d.jpg')

product14 = Product.create!(
    product_name: 'Kobe BE TRUE',
    description: "I can't relate to lazy people. We don't speak the same language. I don't understand you. I don't want to understand you.",
    price: 180,
    category: 'Casual',
    color: 'Rainbow',
    size: '7',
    gender: "Men's",
)

file14a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBETRUE1a.jpg')
product14.photos.attach(io: file14a, filename: 'kobeBETRUE1a.jpg')
file14b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBETRUE1b.jpg')
product14.photos.attach(io: file14b, filename: 'kobeBETRUE1b.jpg')
file14c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBETRUE1c.jpg')
product14.photos.attach(io: file14c, filename: 'kobeBETRUE1c.jpg')
file14d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBETRUE1d.jpg')
product14.photos.attach(io: file14d, filename: 'kobeBETRUE1d.jpg')

product15 = Product.create!(
    product_name: 'Kobe Blazer Vintage',
    description: "I don't talk trash often, but when I do, I go for the jugular.",
    price: 150,
    category: 'Casual',
    color: 'Blue/Red/White',
    size: '7',
    gender: "Men's",
)

file15a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBlazerVintage1a.jpg')
product15.photos.attach(io: file15a, filename: 'kobeBlazerVintage1a.jpg')
file15b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBlazerVintage1b.jpg')
product15.photos.attach(io: file15b, filename: 'kobeBlazerVintage1b.jpg')
file15c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBlazerVintage1c.jpg')
product15.photos.attach(io: file15c, filename: 'kobeBlazerVintage1c.jpg')
file15d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeBlazerVintage1d.jpg')
product15.photos.attach(io: file15d, filename: 'kobeBlazerVintage1d.jpg')

product16 = Product.create!(
    product_name: 'Kobe Eclipse',
    description: "The people who truly know me know what I'm like. There have been people who try to say things that aren't fair, and I check them. And then they don't like me because I checked them.",
    price: 200,
    category: 'Basketball',
    color: 'White',
    size: '7',
    gender: "Men's",
)

file16a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeEclipse1a.jpg')
product16.photos.attach(io: file16a, filename: 'kobeEclipse1a.jpg')
file16b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeEclipse1b.jpg')
product16.photos.attach(io: file16b, filename: 'kobeEclipse1b.jpg')
file16c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeEclipse1c.jpg')
product16.photos.attach(io: file16c, filename: 'kobeEclipse1c.jpg')
file16d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeEclipse1d.jpg')
product16.photos.attach(io: file16d, filename: 'kobeEclipse1d.jpg')

product17 = Product.create!(
    product_name: 'Kobe Killshot',
    description: "I focus on one thing and one thing only - that's trying to win as many championships as I can.",
    price: 180,
    category: 'Casual',
    color: 'White',
    size: '7',
    gender: "Men's",
)

file17a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeKillshot1a.jpg')
product17.photos.attach(io: file17a, filename: 'kobeKillshot1a.jpg')
file17b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeKillshot1b.jpg')
product17.photos.attach(io: file17b, filename: 'kobeKillshot1b.jpg')
file17c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeKillshot1c.jpg')
product17.photos.attach(io: file17c, filename: 'kobeKillshot1c.jpg')
file17d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeKillshot1d.jpg')
product17.photos.attach(io: file17d, filename: 'kobeKillshot1d.jpg')

product18 = Product.create!(
    product_name: 'Kobe One Take',
    description: "I love going one-on-one with someone. That's what I do. I've never lost. It's a whole different game, just to have them right in front of you and be able to do whatever you want.",
    price: 220,
    category: 'Basketball',
    color: 'Lime Green',
    size: '7',
    gender: "Men's",
)

file18a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeOneTake1a.jpg')
product18.photos.attach(io: file18a, filename: 'kobeOneTake1a.jpg')
file18b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeOneTake1b.jpg')
product18.photos.attach(io: file18b, filename: 'kobeOneTake1b.jpg')
file18c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeOneTake1c.jpg')
product18.photos.attach(io: file18c, filename: 'kobeOneTake1c.jpg')
file18d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeOneTake1d.jpg')
product18.photos.attach(io: file18d, filename: 'kobeOneTake1d.jpg')

product19 = Product.create!(
    product_name: 'Kobe PG Gatorade',
    description: "I'm here. I'm not going anywhere. No matter what the injury - unless it's completely debilitating - I'm going to be the same player I've always been. I'll figure it out. I'll make some tweaks, some changes, but I'm still coming.",
    price: 250,
    category: 'Basketball',
    color: 'White/Orange',
    size: '7',
    gender: "Men's",
)

file19a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePGGatorade1a.jpg')
product19.photos.attach(io: file19a, filename: 'kobePGGatorade1a.jpg')
file19b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePGGatorade1b.jpg')
product19.photos.attach(io: file19b, filename: 'kobePGGatorade1b.jpg')
file19c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePGGatorade1c.jpg')
product19.photos.attach(io: file19c, filename: 'kobePGGatorade1c.jpg')
file19d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePGGatorade1d.jpg')
product19.photos.attach(io: file19d, filename: 'kobePGGatorade1d.jpg')

product20 = Product.create!(
    product_name: 'Kobe Pole Vault Elite',
    description: "My parents are my backbone. Still are. They're the only group that will support you if you score zero or you score 40.",
    price: 180,
    category: 'Running',
    color: 'Black',
    size: '7',
    gender: "Men's",
)

file20a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePoleVaultElite1a.jpg')
product20.photos.attach(io: file20a, filename: 'kobePoleVaultElite1a.jpg')
file20b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePoleVaultElite1b.jpg')
product20.photos.attach(io: file20b, filename: 'kobePoleVaultElite1b.jpg')
file20c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePoleVaultElite1c.jpg')
product20.photos.attach(io: file20c, filename: 'kobePoleVaultElite1c.jpg')
file20d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobePoleVaultElite1d.jpg')
product20.photos.attach(io: file20d, filename: 'kobePoleVaultElite1d.jpg')

product21 = Product.create!(
    product_name: 'Kobe Squash-Type 1',
    description: "I'll do whatever it takes to win games, whether it's sitting on a bench waving a towel, handing a cup of water to a teammate, or hitting the game-winning shot.",
    price: 200,
    category: 'Casual',
    color: 'Black',
    size: '7',
    gender: "Men's",
)

file21a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeSquash-Type1a.jpg')
product21.photos.attach(io: file21a, filename: 'kobeSquashType1a.jpg')
file21b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeSquash-Type1b.jpg')
product21.photos.attach(io: file21b, filename: 'kobeSquashType1b.jpg')
file21c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeSquash-Type1c.jpg')
product21.photos.attach(io: file21c, filename: 'kobeSquashType1c.jpg')
file21d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeSquash-Type1d.jpg')
product21.photos.attach(io: file21d, filename: 'kobeSquashType1d.jpg')

product22 = Product.create!(
    product_name: 'Kobe Triple Black',
    description: "Everyone looks at your watch and it represents who you are, your values and your personal style.",
    price: 300,
    category: 'Basketball',
    color: 'Black',
    size: '7',
    gender: "Men's",
)

file22a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleBlack1a.jpg')
product22.photos.attach(io: file22a, filename: 'kobeTripleBlack1a.jpg')
file22b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleBlack1b.jpg')
product22.photos.attach(io: file22b, filename: 'kobeTripleBlack1b.jpg')
file22c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleBlack1c.jpg')
product22.photos.attach(io: file22c, filename: 'kobeTripleBlack1c.jpg')
file22d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleBlack1d.jpg')
product22.photos.attach(io: file22d, filename: 'kobeTripleBlack1d.jpg')

product23 = Product.create!(
    product_name: 'Kobe Triple Jump Elite',
    description: "Everyone looks at your watch and it represents who you are, your values and your personal style.",
    price: 170,
    category: 'Running',
    color: 'Lime Green',
    size: '7',
    gender: "Men's",
)

file23a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleJumpElite1a.jpg')
product23.photos.attach(io: file23a, filename: 'kobeTripleJumpElite1a.jpg')
file23b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleJumpElite1b.jpg')
product23.photos.attach(io: file23b, filename: 'kobeTripleJumpElite1b.jpg')
file23c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleJumpElite1c.jpg')
product23.photos.attach(io: file23c, filename: 'kobeTripleJumpElite1c.jpg')
file23d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeTripleJumpElite1d.jpg')
product23.photos.attach(io: file23d, filename: 'kobeTripleJumpElite1d.jpg')

product41 = Product.create!(
    product_name: 'Kobe UwU',
    description: "I saw you come in and I wanted you to know that it doesn’t matter how hard you work, that I’m willing to work harder than you.",
    price: 777,
    category: 'Running',
    color: 'Cyan',
    size: '7',
    gender: "Men's",
)

file41a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeUwU1a.jpg')
product41.photos.attach(io: file41a, filename: 'kobeUwU1a.jpg')
file41b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeUwU1b.jpg')
product41.photos.attach(io: file41b, filename: 'kobeUwu1b.jpg')
file41c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeUwU1c.jpg')
product41.photos.attach(io: file41c, filename: 'kobeUwu1c.jpg')
file41d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeUwU1d.jpg')
product41.photos.attach(io: file41d, filename: 'kobeUwu1d.jpg')

product24 = Product.create!(
    product_name: 'Kobe Vomero',
    description: "Sports are such a great teacher. I think of everything they've taught me: camaraderie, humility, how to resolve differences.",
    price: 180,
    category: 'Running',
    color: 'Grey',
    size: '7',
    gender: "Men's",
)

file24a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeVomero1a.jpg')
product24.photos.attach(io: file24a, filename: 'kobeVomero1a.jpg')
file24b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeVomero1b.jpg')
product24.photos.attach(io: file24b, filename: 'kobeVomero1b.jpg')
file24c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeVomero1c.jpg')
product24.photos.attach(io: file24c, filename: 'kobeVomero1c.jpg')
file24d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeVomero1d.jpg')
product24.photos.attach(io: file24d, filename: 'kobeVomero1d.jpg')

product25 = Product.create!(
    product_name: 'Kobe Waffle',
    description: "The Black Mamba collection of watches is me: It is my alter ego, so to speak. As I mentioned before, it is sharp, cutting edge and sleek which are characteristics I try to apply when I'm out there on the basketball court.",
    price: 230,
    category: 'Running',
    color: 'Black/Orange',
    size: '7',
    gender: "Men's",
)

file25a = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeWaffle1a.jpg')
product25.photos.attach(io: file25a, filename: 'kobeWaffle1a.jpg')
file25b = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeWaffle1b.jpg')
product25.photos.attach(io: file25b, filename: 'kobeWaffle1b.jpg')
file25c = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeWaffle1c.jpg')
product25.photos.attach(io: file25c, filename: 'kobeWaffle1c.jpg')
file25d = open('https://yike-dev.s3-us-west-1.amazonaws.com/kobeWaffle1d.jpg')
product25.photos.attach(io: file25d, filename: 'kobeWaffle1d.jpg')




product26 = Product.create!(
    product_name: 'Kobe Air Force 1 Sage Low',
    description: "We all know what flopping is when we see it. The stuff that you see is where guys aren't really getting hit at all and are just flailing around like a fish out of water.",
    price: 150,
    category: 'Casual',
    color: 'Lime Green',
    size: '7',
    gender: "Women's",
)

file26a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAirForce1SageLow1a.jpg')
product26.photos.attach(io: file26a, filename: 'kobeAirForceSageLow1a.jpg')
file26b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAirForce1SageLow1b.jpg')
product26.photos.attach(io: file26b, filename: 'kobeAirForceSageLow1b.jpg')
file26c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAirForce1SageLow1c.jpg')
product26.photos.attach(io: file26c, filename: 'kobeAirForceSageLow1c.jpg')
file26d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAirForce1SageLow1d.jpg')
product26.photos.attach(io: file26d, filename: 'kobeAirForceSageLow1d.jpg')

product27 = Product.create!(
    product_name: "Kobe Air Force 1 '07",
    description: "The Black Mamba collection of watches is me: It is my alter ego, so to speak. As I mentioned before, it is sharp, cutting edge and sleek which are characteristics I try to apply when I'm out there on the basketball court.",
    price: 180,
    category: 'Casual',
    color: 'Melon',
    size: '7',
    gender: "Women's",
)

file27a = open('https://yike-dev.s3-us-west-1.amazonaws.com/Wkobeairforce107a.jpg')
product27.photos.attach(io: file27a, filename: 'kobeAirforce1071a.jpg')
file27b = open('https://yike-dev.s3-us-west-1.amazonaws.com/Wkobeairforce107b.jpg')
product27.photos.attach(io: file27b, filename: 'kobeAirforce1071b.jpg')
file27c = open('https://yike-dev.s3-us-west-1.amazonaws.com/Wkobeairforce107c.jpg')
product27.photos.attach(io: file27c, filename: 'kobeAirforce1071c.jpg')
file27d = open('https://yike-dev.s3-us-west-1.amazonaws.com/Wkobeairforce107d.jpg')
product27.photos.attach(io: file27d, filename: 'kobeAirforce1071d.jpg')

product28 = Product.create!(
    product_name: "Kobe Asuna",
    description: "We all have self-doubt. You don’t deny it, but you also don’t capitulate to it. You embrace it.",
    price: 50,
    category: 'Casual',
    color: 'Lime Green',
    size: '7',
    gender: "Women's",
)

file28a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAsuna1a.jpg')
product28.photos.attach(io: file28a, filename: 'kobeAsuna1a.jpg')
file28b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAsuna1b.jpg')
product28.photos.attach(io: file28b, filename: 'kobeAsuna1b.jpg')
file28c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAsuna1c.jpg')
product28.photos.attach(io: file28c, filename: 'kobeAsuna1c.jpg')
file28d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeAsuna1d.jpg')
product28.photos.attach(io: file28d, filename: 'kobeAsuna1d.jpg')

product29 = Product.create!(
    product_name: "Kobe Fly-Ease",
    description: "Be willing to sacrifice anything, but compromise nothing in your quest to be your best.",
    price: 250,
    category: 'Basketball',
    color: 'Grey',
    size: '7',
    gender: "Women's",
)

file29a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlyease1a.jpg')
product29.photos.attach(io: file29a, filename: 'kobeflyease1a.jpg')
file29b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlyease1b.jpg')
product29.photos.attach(io: file29b, filename: 'kobeflyease1b.jpg')
file29c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlyease1c.jpg')
product29.photos.attach(io: file29c, filename: 'kobeflyease1c.jpg')
file29d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlyease1d.jpg')
product29.photos.attach(io: file29d, filename: 'kobeflyease1d.jpg')

product30 = Product.create!(
    product_name: "Kobe Fly-Trap",
    description: "Losers visualize the penalties of failure. Winners visualize the rewards of success.",
    price: 270,
    category: 'Basketball',
    color: 'White',
    size: '7',
    gender: "Women's",
)

file30a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlytrap1a.jpg')
product30.photos.attach(io: file30a, filename: 'kobeflytrape1a.jpg')
file30b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlytrap1b.jpg')
product30.photos.attach(io: file30b, filename: 'kobeflytrap1b.jpg')
file30c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlytrap1c.jpg')
product30.photos.attach(io: file30c, filename: 'kobeflytrap1c.jpg')
file30d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeFlytrap1d.jpg')
product30.photos.attach(io: file30d, filename: 'kobeflytrap1d.jpg')

product31 = Product.create!(
    product_name: "Kobe Lebron 17 MTAA",
    description: "The odd thing is that I wound up learning more about the world around me by having a singular focus inside of me.",
    price: 230,
    category: 'Basketball',
    color: 'Blue/White',
    size: '7',
    gender: "Women's",
)

file31a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeLebron17MTAA1a.jpg')
product31.photos.attach(io: file31a, filename: 'kobelebron1a.jpg')
file31b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeLebron17MTAA1b.jpg')
product31.photos.attach(io: file31b, filename: 'kobelebron1b.jpg')
file31c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeLebron17MTAA1c.jpg')
product31.photos.attach(io: file31c, filename: 'kobelebron1c.jpg')
file31d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeLebron17MTAA1d.jpg')
product31.photos.attach(io: file31d, filename: 'kobelebron1d.jpg')

product32 = Product.create!(
    product_name: "Kobe Mamba Fury",
    description: "Trust me, setting things up right from the beginning will avoid a ton of tears and heartache…",
    price: 300,
    category: 'Basketball',
    color: 'Black/Red',
    size: '7',
    gender: "Women's",
)

file32a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeMambaFury1a.jpg')
product32.photos.attach(io: file32a, filename: 'kobemambafury1a.jpg')
file32b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeMambaFury1b.jpg')
product32.photos.attach(io: file32b, filename: 'kobemambafury1b.jpg')
file32c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeMambaFury1c.jpg')
product32.photos.attach(io: file32c, filename: 'kobemambafury1c.jpg')
file32d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeMambaFury1d.jpg')
product32.photos.attach(io: file32d, filename: 'kobemambafury1d.jpg')

product33 = Product.create!(
    product_name: "Kobe Pegasus",
    description: "This is the moment I accept the most challenging times will always be behind me AND in front of me",
    price: 180,
    category: 'Running',
    color: 'Pink',
    size: '7',
    gender: "Women's",
)

file33a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePegasus1a.jpg')
product33.photos.attach(io: file33a, filename: 'kobepegasus1a.jpg')
file33b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePegasus1b.jpg')
product33.photos.attach(io: file33b, filename: 'kobepegasus1b.jpg')
file33c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePegasus1c.jpg')
product33.photos.attach(io: file33c, filename: 'kobepegasus1c.jpg')
file33d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePegasus1d.jpg')
product33.photos.attach(io: file33d, filename: 'kobepegasus1d.jpg')

product34 = Product.create!(
    product_name: "Kobe Phantom",
    description: "Either way, I refuse to change what I am. A lion has to eat. Run with me or run from me.",
    price: 170,
    category: 'Running',
    color: 'White/Pink',
    size: '7',
    gender: "Women's",
)

file34a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePhantom1a.jpg')
product34.photos.attach(io: file34a, filename: 'kobephantom1a.jpg')
file34b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePhantom1b.jpg')
product34.photos.attach(io: file34b, filename: 'kobephantom1b.jpg')
file34c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePhantom1c.jpg')
product34.photos.attach(io: file34c, filename: 'kobephantom1c.jpg')
file34d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobePhantom1d.jpg')
product34.photos.attach(io: file34d, filename: 'kobephantom1d.jpg')

product35 = Product.create!(
    product_name: "Kobe React Vision",
    description: "The examples are endless but my philosophy is simple. Once I knew my seed, I was able to discover my muse and my purpose for being was crystal clear.",
    price: 200,
    category: 'Casual',
    color: 'Grey/Pink',
    size: '7',
    gender: "Women's",
)

file35a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeReactVision1a.jpg')
product35.photos.attach(io: file35a, filename: 'kobeReactVision1a.jpg')
file35b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeReactVision1b.jpg')
product35.photos.attach(io: file35b, filename: 'kobeReactVision1b.jpg')
file35c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeReactVision1c.jpg')
product35.photos.attach(io: file35c, filename: 'kobeReactVision1c.jpg')
file35d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeReactVision1d.jpg')
product35.photos.attach(io: file35d, filename: 'kobeReactVision1d.jpg')

product36 = Product.create!(
    product_name: "Kobe Renew",
    description: "The moment you give up, is the moment you let someone else win",
    price: 200,
    category: 'Running',
    color: 'Black',
    size: '7',
    gender: "Women's",
)

file36a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeRenew1a.jpg')
product36.photos.attach(io: file36a, filename: 'kobeReactRenew1a.jpg')
file36b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeRenew1b.jpg')
product36.photos.attach(io: file36b, filename: 'kobeReactRenew1b.jpg')
file36c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeRenew1c.jpg')
product36.photos.attach(io: file36c, filename: 'kobeReactRenew1c.jpg')
file36d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeRenew1d.jpg')
product36.photos.attach(io: file36d, filename: 'kobeReactRenew1d.jpg')

product37 = Product.create!(
    product_name: "Kobe Terra King",
    description: "If you don’t believe in yourself, no one will do it for you",
    price: 230,
    category: 'Running',
    color: 'Stone',
    size: '7',
    gender: "Women's",
)

file37a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeTerraKiger1a.jpg')
product37.photos.attach(io: file37a, filename: 'kobeReactterraking1a.jpg')
file37b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeTerraKiger1b.jpg')
product37.photos.attach(io: file37b, filename: 'kobeReactterraking1b.jpg')
file37c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeTerraKiger1c.jpg')
product37.photos.attach(io: file37c, filename: 'kobeReactterraking1c.jpg')
file37d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeTerraKiger1d.jpg')
product37.photos.attach(io: file37d, filename: 'kobeReactterraking1d.jpg')

product38 = Product.create!(
    product_name: "Kobe Vapor Max",
    description: "The beauty in being blessed with talent is rising above doubters to create a beautiful moment.",
    price: 150,
    category: 'Casual',
    color: 'White',
    size: '7',
    gender: "Women's",
)

file38a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeVaporMax1a.jpg')
product38.photos.attach(io: file38a, filename: 'kobevapormaxed1a.jpg')
file38b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeVaporMax1b.jpg')
product38.photos.attach(io: file38b, filename: 'kobevapormaxed1b.jpg')
file38c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeVaporMax1c.jpg')
product38.photos.attach(io: file38c, filename: 'kobevapormaxed1c.jpg')
file38d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeVaporMax1d.jpg')
product38.photos.attach(io: file38d, filename: 'kobevapormaxed1d.jpg')

product39 = Product.create!(
    product_name: "Kobe Winflo",
    description: "The topic of leadership is a touchy one. A lot of leaders fail because they don’t have the bravery to touch that nerve or strike that chord. Throughout my years, I haven’t had that fear.",
    price: 200,
    category: 'Running',
    color: 'Black',
    size: '7',
    gender: "Women's",
)

file39a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeWinflo1a.jpg')
product39.photos.attach(io: file39a, filename: 'kobewinflo1a.jpg')
file39b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeWinflo1b.jpg')
product39.photos.attach(io: file39b, filename: 'kobewinflo1b.jpg')
file39c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeWinflo1c.jpg')
product39.photos.attach(io: file39c, filename: 'kobewinflo1c.jpg')
file39d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeWinflo1d.jpg')
product39.photos.attach(io: file39d, filename: 'kobewinflo1d.jpg')

product40 = Product.create!(
    product_name: "Kobe Zoom Freak 2 Naija",
    description: "I’m reflective only in the sense that I learn to move forward. I reflect with a purpose",
    price: 250,
    category: 'Basketball',
    color: 'Green/White',
    size: '7',
    gender: "Women's",
)

file40a = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeZoomFreak2Naija1a.jpg')
product40.photos.attach(io: file40a, filename: 'kobeNaija1a.jpg')
file40b = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeZoomFreak2Naija1b.jpg')
product40.photos.attach(io: file40b, filename: 'kobeNaija1b.jpg')
file40c = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeZoomFreak2Naija1c.jpg')
product40.photos.attach(io: file40c, filename: 'kobeNaija1c.jpg')
file40d = open('https://yike-dev.s3-us-west-1.amazonaws.com/WkobeZoomFreak2Naija1d.jpg')
product40.photos.attach(io: file40d, filename: 'kobeNaija1d.jpg')































