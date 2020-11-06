const { Router } = require('express')
const controllers = require('../controllers/users')

const router = Router()

router.get('/user', controllers.getUsers)
router.get('/user/:id', controllers.getUser)
router.post('/user', controllers.createUser)
router.put('/user/:id', controllers.updateUser)
router.delete('/user/:id', controllers.deleteUser)

module.exports = router