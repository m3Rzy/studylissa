const Router = require('express')
const router = new Router()
const pupilController = require('../controllers/pupilController')

router.post('/addpupil', pupilController.addPupil)

module.exports = router