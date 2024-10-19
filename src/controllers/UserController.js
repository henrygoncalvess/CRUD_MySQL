const database = require('../models/connection.js')

class UserController{
    index(req, res){
        const response = database

        res.json(response)
    }

    new(req, res){
        database.push(req.body)

        res.sendStatus(201)
    }

    update(req, res){
        const currentUser = req.body

        database.forEach(element => {
            if (element.username === currentUser.username){
                element.username = currentUser.newUsername
            }
        })

        res.sendStatus(200)
    }

    remove(req, res){
        const { deleteUser } = req.body

        console.log(database);

        database.forEach((element, pos) => {
            if (element.username === deleteUser){
                database.splice(pos, 1)
            }
        })

        res.sendStatus(200)
    }
}

module.exports = new UserController