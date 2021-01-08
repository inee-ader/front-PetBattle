# PET BATTLER

## README

THIS IS THE FRONT-END PROGRAM; here is a link to the back-end: https://github.com/inee-ader/back-PetBattle

## DESCRIPTION 
YOUTUBE

This was a group project for Phase 4 of Flatiron School Software Engineering program; cohort start date October 5th, 2020. 

Built in one week with Ruby on Rails, JavaScript and React frameworks. 

In this web app, the user chooses from a variety of fantasy-battle pets (from Blizzard's Pet API) to go up against a powerful Manticore boss! With a team of 3 pets, the user takes turns against the boss until one emerges victorious! One pet attacks at a time until it gets knocked out. 

User Stories: 
- User is able to create, read(login), update, and delete account (full CRUD)
- User has access to main menu buttons (choose team, edit user, logout)
- User is able to choose 3 pets for their team
- User enters battle and a game is created with a boss character
- User commands pet abilities to take down the boss HP
- User completes the game by winning or losing and cycled back to main menu

## INSTRUCTIONS

After downloading the front and back end, you can put these files in a main directory on your local computer. 

Start in back-end: 
Navigate to back-end and in the terminal, run `bundle install` to make sure all the gems are installed and up to date. 
Next, run a `rails db:migrate` to get your database created. 
Then, start a rails server with `rails s` which should open a `localhost:3000` page in the browser. 

In the front-end: 
Navigate to the front-end directory and in the terminal, run `npm install` or `yarn` to make sure all packages are present and updated. 
Next, run `npm start` or `yarn start` to open a `localhost:3001` page in your browser. Since your rails server is running, it'll ask you if you want to open it up in another port, which is why this is localhost:3001. 

## CONTRIBUTING

For this project, we had some future stretch goals: 
- after battle, gold and experience is rewarded
- gold is used to buy new pets, which can be unlocked with more battles
- experience goes to the pets who can gain levels and increase their damage 
- different game modes may be set to battle a string of bosses, 3 v 1: all pets attack at once. 
- animating HP bars to display damage to pets and boss
- once pets are knocked out, they appear disabled in the team box
- animating pet and boss icons to move and bounce with attacks

## AUTHORS
Michael Lee - https://github.com/Michael-Lee-1994
Kevin Grow - https://github.com/kgrowkgrow
Inee Ader - https://github.com/inee-ader