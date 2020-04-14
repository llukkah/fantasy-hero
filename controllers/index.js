const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Hero = require('../models/hero')
const Specialty = require('../models/specialty')
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
        const user = await new User({
            username,
            email,
            password_digest
        })

        await user.save()

        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(payload, TOKEN_KEY)
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log(
            'You made it to the signUp controller, but there was an error :('
        )
        return res.status(400).json({ error: error.message })
    }
}

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username: username })
        if (await bcrypt.compare(password, user.password_digest)) {
            const payload = {
                id: user._id,
                username: user.username,
                email: user.email
            }

            const token = jwt.sign(payload, TOKEN_KEY)
            return res.status(201).json({ user, token })
        } else {
            res.status(401).send('Invalid Credentials')
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const verifyUser = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token, TOKEN_KEY)
        res.json({ user })
    } catch (e) {
        res.status(401).send('Not Authorized')
    }
}

const changePassword = async (req, res) => { }


const getSpecialty = async (req, res) => {
  try {

    res.status(404).json({ message: 'Product not found!' })
} catch (error) {
    res.status(500).json({ error: error.message })
}
}

const getHeroes = async (req, res) => {
    try {
      const heros = await Hero.find()
      const id = heros.map(hero => hero.specialty)
      // console.log(id)
      let result = []
      let name = []
      for (let i = 0; i < id.length; i++){
        result.push(await Specialty.findById(id[i]))
      }
      for (let i = 0; i < result.length; i++){
        name.push(result[i].name)
      }
      // console.log(name)
      // console.log( await result)
      if (name) {
        return res.json({
          hero: heros,
          names: name
        })
      }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getHero = async (req, res) => {
    try {
        const { id } = req.params
        const hero = await Hero.findById(id)
        if (hero) {
            return res.json(hero)
        }
        res.status(404).json({ message: 'Product not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createHero = async (req, res) => {
    try {
        const hero = await new Hero(req.body)
        await hero.save()
        res.status(201).json(hero)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateHero = async (req, res) => {
    const { id } = req.params
    await Hero.findByIdAndUpdate(id, req.body, { new: true }, (error, hero) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!hero) {
            return res.status(404).json({ message: 'Hero not found!' })
        }
        res.status(200).json(hero)
    })
}

const deleteHero = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Hero.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Hero deleted")
        }
        throw new Error("Hero not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    signUp,
    signIn,
    verifyUser,
    changePassword,
    getSpecialty,
    createHero,
    getHeroes,
    getHero,
    updateHero,
    deleteHero
}