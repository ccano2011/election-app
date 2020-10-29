const { Router } = require('express')
const controllers = require('../controllers/posts')

const router = Router()

router.get('/users', controllers.getPosts)
router.get('/users/:id', controllers.getPost)
router.post('/users', controllers.createPost)
router.put('/users/:id', controllers.updatePost)
router.delete('/users/:id', controllers.deletePost)

module.exports = router