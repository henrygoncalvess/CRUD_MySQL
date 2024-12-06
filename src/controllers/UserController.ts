import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController{
    async index(req: Request, res: Response): Promise<void>{
        try{
            const users = await UserModel.findAll()

            res.status(200).json(users)

        } catch (error){
            res.status(400)
            throw error
        }
    }

    async new(req: Request, res: Response): Promise<void>{
        try{
            const { nome, nascimento, sexo, peso } = req.body
            
            const newUser = await UserModel.create({ nome, nascimento, sexo, peso })

            res.status(201).json(newUser)

        } catch (error){
            res.status(400)
            throw error
        }
    }

    async update(req: Request, res: Response): Promise<void>{
        try{
            const { usuario, ...updates } = req.body;

            const userUpdate = await UserModel.update(usuario, updates)

            res.status(200).json(userUpdate)

        } catch (error) {
            res.status(400)
            throw error
        }
    }

    async remove(req: Request, res: Response): Promise<void>{
        try{
            const { usuario } = req.body

            const userDelete = await UserModel.remove(usuario)

            res.status(200).json(userDelete)

        } catch (error) {
            res.status(400)
            throw error
        }
    }
}

export default new UserController