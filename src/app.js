const express = require('express')
const cors = require('cors')
const rota = require('./routes/users.js')

class App{
    constructor(){
        this.express = express()
        this.#middlewares()
    }

    #middlewares(){
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use('/api', rota)
    }
}

module.exports = new App().express