const express = require('express')
const router = express.Router()
const whatsControllers = require('../controllers/whatsControllers')

router.get(
    '/data/user/unalterable/', 
    whatsControllers.getListAllUserPersonalData
)
router.get(
    '/data/user/editable/', 
    whatsControllers.getListUserProfileAccountData
)
router.get(
    '/data/contact/user/', 
    whatsControllers.getListContactDetailsForEachUser
)
router.get(
    '/filter/', 
    whatsControllers.getFilterAll
)

module.exports = router