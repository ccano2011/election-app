const { Router } = require('express')
const controllers = require('../controllers/requests')

const router = Router()

router.get('/ballotreq', controllers.getRequests)
router.get('/ballotreq/:id', controllers.getRequest)
router.post('/ballotreq', controllers.createRequest)
router.put('/ballotreq/:id', controllers.updateRequest)
router.delete('/ballotreq/:id', controllers.deleteRequest)

module.exports = router