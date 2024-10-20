const database = require('../models/db.js')

class UserController{
    async index(req, res){
        const response = await database.query(`SELECT * FROM ${process.env.TABLE}`)

        res.json(response)
    }

    async new(req, res){
        const { nome, nascimento, sexo, peso } = req.body

        const newUser = await database.query(
            `INSERT INTO ${process.env.TABLE}
            (nome, nascimento, sexo, peso)
            VALUES
            (?, ?, ?, ?)`,
            [nome, nascimento, sexo, peso]
        )

        console.log(newUser)

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