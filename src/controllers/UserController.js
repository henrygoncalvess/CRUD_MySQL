const UserModel = require('../models/UserModel.js')

class UserController{
    async index(req, res){
        try{
            const users = await UserModel.findAll()

            res.json(users)

        } catch (error){
            res.sendStatus(400)
            throw error
        }
    }

    async new(req, res){
        try{
            const { nome, nascimento, sexo, peso } = req.body
            
            const newUser = await UserModel.create({ nome, nascimento, sexo, peso })

            res.json(newUser)

        } catch (error){
            res.sendStatus(400)
            throw error
        }
    }

    async update(req, res){
        try{
            const { usuario, ...updates } = req.body;

            const userUpdate = await UserModel.update(usuario, updates)

            res.json(userUpdate)

        } catch (error) {
            res.sendStatus(400)
            throw error
        }
    }

    async remove(req, res){
        try{
            const { usuario } = req.body

            const userDelete = await UserModel.remove(usuario)

            res.json(userDelete)

        } catch (error) {
            res.sendStatus(400)
            throw error
        }
    }
}

module.exports = new UserController