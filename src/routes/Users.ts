import { Router } from 'express';
import UserController from '../controllers/UserController';

const rota = Router()

rota.get('/users', UserController.index)

rota.post('/users', UserController.new)

rota.put('/users', UserController.update)

rota.delete('/users', UserController.remove)

export default rota;