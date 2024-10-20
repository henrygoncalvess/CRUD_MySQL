const database = require('../models/db.js')

class UserController{
    async index(req, res){
        try{
            const response = await database.query(`SELECT * FROM ${process.env.TABLE}`)

            res.json(response)

        } catch (error){
            res.sendStatus(400)
            throw error
        }
    }

    async new(req, res){
        try{
            const { nome, nascimento, sexo, peso } = req.body
            
            if (!nome || !nascimento || !sexo){
                throw new Error(`Os campos "nome", "nascimento" e "sexo" são obrigatórios.`);
            }

            const [ addNewUser ] = await database.query(
                `INSERT INTO ${process.env.TABLE} (nome, nascimento, sexo, peso) VALUES (?, ?, ?, ?)`,
                [nome, nascimento, sexo, peso]
            )

            res.json(addNewUser)

        } catch (error){
            res.sendStatus(400)
            throw error
        }
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