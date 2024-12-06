import express, { Application } from "express";
import cors from 'cors';
import rota from "./routes/Users";

class App{
    public express: Application;

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

export default new App().express;