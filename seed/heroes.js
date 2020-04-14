const db = require('../db')
const Specialty = require('../models/specialty')
const Hero = require('../models/hero')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
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
      { name: 'Cloud', specialty: warrior._id , race: 'human', hp: 100, atk:50, weapon:"sword",img: " " },
      { name: 'Shrek', specialty: hunter._id , race: 'orc', hp: 100, atk:50, weapon:"bow",img: " " },
      { name: 'llukkah', specialty: rogue._id , race: 'elf', hp: 100, atk:50, weapon:"daggers",img: " " },
      { name: 'Jaccson', specialty: mage._id , race: 'human', hp: 100, atk:50, weapon:"staff",img: " " },
      { name: 'Janice', specialty: healer._id , race: 'orc', hp: 100, atk:50, weapon:"staff",img: " " },
      { name: 'Jason', specialty: warrior._id , race: 'elf', hp: 100, atk:50, weapon:"sword",img: " " },
    ]
    await Hero.insertMany(hero)
    console.log("Created Heros!")
  }

const run = async () => {
    await main()
    db.close()
}

run()