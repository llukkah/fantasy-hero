# fantasy-hero
Welcome to Fantasy Hero; an interactive web app that lets you create your own custom character.  

Let your imagination flow into another world as your hero becomes updated with it's most recent skills, weapons, allies and accomplishments, to name a few.   

Or, gain the status of ruler in your game as your kill off and delete your enemies to keep track of everyone's placement.   

Try it out for yourself or check out our heroes that we have made in the past!

## MVP

MVP consists of creating a working product that allows users to create their own custom characters, view existing characters on a page, and update/remove their characters. 

### Deployment
- Front end React app will be deployed via [Surge](https://surge.sh/)
- Backend will be deployed via [Heroku](heroku.com)
- MongoDB database will be deployed to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### CRUD Functionality
- Creating custom characters
- Reading characters from database, displaying them on page
-  Updating character details and abilities
-  Deleting characters

### Tools
- CSS Flexbox/Grid
- Google Fonts
- MERN stack (MongoDB, Express, React, Node)
- React Routes
- React Components
- Color Pallete Generated by [ColorSpace](https://mycolor.space/)
-  *Git commits are to be made regularly by team members on their respective branchs and must be approved before merging.*


### POST MVP
 - Search Functionality
 - Images
 - Transformation into turn based battle game based on randomized HP & Attack values
 

### Wireframes/UI/System Design
#### Wireframes by Figma:
![UI](./wireframes/fantasy-hero.png)

#### UI

```
Primary/Secondary Fonts Choice: Google Fonts (Montserrat/Open Sans)
Colors:

```
#### Stack
```
System Overview/Stack:
MongoDB
Express
React
Node.js
```
#### Component Heirarchy 

```
React Setup:
src
|__ assets/
  |__ wireframes
|__ Shared/
  |__ Layout.jsx
  |__ Sort.js
|__ components/
  |__ App.jsx
  |__ Header.jsx
  |__ Landing.jsx
    |__RandomizeText.jsx
  |__ReadHeroProfiles.jsx     
    |__CreateHeroProfile.jsx
  |__ReadSingleHero.jsx
    |__UpdateHeroProfile.jsx
    |__DeleteHeroProfile.js
  |__ Footer.jsx
```
#### MongoDB Heirarchy 

```
MongoDB Setup: 
|__ Models
  |__ Class.js
    |__class: string
        [(
          skill a
          skill b
          skill c
          ultimate
        )]
  |__ Hero.js
    |__name: string
    |__class: [objectID]
    |__race: string
    |__hp: int
    |__atk: int
    |__weapon: string
    |__img: string 
```