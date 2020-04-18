const db = require('../db')
const User = require('../models/user')
const Specialty = require('../models/specialty')
const Hero = require('../models/hero')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const user = await new User ({
    username: "Janice1",
    email: "Janice1@janice.com",
    password_digest: "$2b$11$waXj5Xlm5pqx78W0RwfXIeIl/d/tBLQfkFoJd6A2c8LXNhgBPV4Ja"
  })
  user.save()
// janice3 password

  const mage = await new Specialty({
    name: 'mage',
    skills: {
      a: "Fireball", 
      b: "Iceball",
      c: "Magic Wall",
      ult: "Meteor Shower"
      }})
  mage.save()
  const warrior = await new Specialty({ name: 'warrior',skills: {
    a: "Shield", 
    b: "Slam",
    c: "Stab",
    ult: "Whirlwind"
    } })
  warrior.save()
  const hunter = await new Specialty({ name: 'hunter', skills: {
    a: "Poison Arrow", 
    b: "Ice Arrow",
    c: "Tracking Arrow",
    ult: "Arrow Barrage"
    }})
  hunter.save()
  const healer = await new Specialty({ name: 'healer', skills: {
    a: "Heal", 
    b: "Debuff",
    c: "Buff",
    ult: "Revive"
    }})
  healer.save()
  const rogue = await new Specialty({ name: 'rogue',skills: {
    a: "Stealth", 
    b: "Steal",
    c: "Dodge",
    ult: "Backstab"
    } })
  rogue.save()
  

  const hero = [
      { user_id: user._id, name: 'Cloud', specialty: warrior._id , race: 'human', hp: 100, atk:50, weapon:"sword",img: "https://media.giphy.com/media/UvQ2W4OYg3EKahV5Xe/giphy.gif", description:"bad ass in Final Fantasy"}, 
      { user_id: user._id, name: 'Shrek', specialty: hunter._id , race: 'orc', hp: 100, atk:50, weapon:"bow",img: "https://media.giphy.com/media/jbK1X44xKVP0g1IAdX/giphy.gif", description:"ugly on the outside, pretty on the inside"},
      { user_id: user._id, name: 'llukkah', specialty: rogue._id , race: 'elf', hp: 100, atk:50, weapon:"daggers",img: "https://media.giphy.com/media/7zDnTYeWCpC76gBbnq/giphy.gif", description:"basic af"},
      { user_id: user._id, name: 'Jaccson', specialty: mage._id , race: 'human', hp: 100, atk:50, weapon:"staff",img: "https://media.giphy.com/media/9wZICkCDXvfI3sakgt/giphy.gif", description:"umm, I dont know"},
      { user_id: user._id, name: 'Janice', specialty: healer._id , race: 'orc', hp: 100, atk:50, weapon:"staff",img: "https://media.giphy.com/media/kiX9RGd9AH5kYyVQ72/giphy.gif", description:"master of none"},
      { user_id: user._id, name: 'Jason', specialty: warrior._id , race: 'elf', hp: 100, atk:50, weapon:"sword",img: "https://media1.giphy.com/media/vc0hgosIuFDzQdn1fJ/source.gif", description:"kills curiosity and the cat"},
    ]
    await Hero.insertMany(hero)
    console.log("Created Heros!")
  }

const run = async () => {
    await main()
    db.close()
}

run()