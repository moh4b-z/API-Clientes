const express = require('express')
const router = express.Router()
const controllersClientes = require('../controllers/controllersClientes')

router.post(
    '/', 
    controllersClientes.postClientes
)
router.put(
    '/:id', 
    controllersClientes.putClientes
)
router.delete(
    '/:id', 
    controllersClientes.deleteClientes
)
router.get(
    '/', 
    controllersClientes.getSearchAllClientes
)
router.get(
    '/:id', 
    controllersClientes.getSearchClientes
)

module.exports = router