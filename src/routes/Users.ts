import { Router } from 'express';
import UserController from '../controllers/UserController';

const rota = Router()

rota.get('/user', UserController.index)

rota.post('/new/user', UserController.new)

rota.put('/update/user', UserController.update)

rota.delete('/delete/user', UserController.remove)

export default rota;