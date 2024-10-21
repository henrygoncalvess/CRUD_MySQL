const express = require('express')
const rota = express.Router()
const UserController = require('../controllers/UserController.js')

rota.get('/user', UserController.index)

rota.post('/new/user', UserController.new)

rota.put('/update/user', UserController.update)

rota.delete('/delete/user', UserController.remove)

module.exports = rota