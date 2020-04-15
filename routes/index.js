const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers')

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verifyUser)
router.post('/change-password', controllers.changePassword)

router.get('/heroes', controllers.getHeroes)
router.get('/heroes/:id', controllers.getHero)
router.get('/create-hero', restrict, controllers.getSpecialty)
router.post('/create-hero', restrict, controllers.createHero)
router.put('/heroes/:id', restrict, controllers.updateHero)
router.delete('/heroes/:id', restrict, controllers.deleteHero)

module.exports = router