# Yike

Yike [Yi-kee], a Nike clone, is a online Kobe shoe store that allows users to browse, purchase, and rate shoes. 

### `Framework:`

* Ruby 
* Rails
* React.js
* Redux.js
* PostgresSQL
* Webpack
* Amazon AWS S3

### `Setup:`
*To run locally on computer*:

In terminal: 
 1. `bundle install`
 2. `npm install`
 
In computer:
 3. Start PostgreSQL to start database
 
In terminal:
 4. `rails db:setup` to setup database
 5. `rails s` to start Rails Server
 6. `npm start` to start Webpack module bundler

In browser:
 7. `http://localhost:3000`

### `Features:`

* Demo User Sign In 
  * Features a demo user log in for access to other functionality of the site without having to create a new user

 ![demo](https://user-images.githubusercontent.com/66042755/91590183-cc531680-e90f-11ea-9b42-4c6b12eabab8.gif)

* Product Index Page 
  * Shows all inventory of shoes 
  * Navigate through categories of shoes on main nav bar
 
 ![index](https://user-images.githubusercontent.com/66042755/91594387-b3019880-e916-11ea-9f8f-5d4855bb7cb0.gif)
 
* Product Show Page 
  * Picture on index page links to the shoe show page
  * Able to choose a size to add to the cart 

![show](https://user-images.githubusercontent.com/66042755/91593340-d1ff2b00-e914-11ea-829c-dd6dd74d9a23.gif)

* Shopping Cart Page
  * Shows all user's cart items 
  * Can adjust the quantity of each cart item and update the total price
 
![cart](https://user-images.githubusercontent.com/66042755/91593353-d6c3df00-e914-11ea-8ba7-0f5580c0c22d.gif)

