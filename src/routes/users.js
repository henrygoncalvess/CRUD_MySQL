// --- 1xx: informação

// --- 2xx: sucesso
//   --- 200:   OK
//   --- 201:   CREATED
//   --- 200:   não tem conteúdo PUT POST DELETE

// --- 3xx: redirection

// --- 4xx: client error
//   --- 400:   bad request
//   --- 404:   not found

// --- 5xx: server error
//   --- 404:   internal server error

const express = require('express')
const rota = express.Router()
const UserController = require('../controllers/UserController.js')

rota.get('/user', UserController.index)

rota.post('/new/user', UserController.new)

rota.put('/update/user', UserController.update)

rota.delete('/delete/user', UserController.remove)

module.exports = rota