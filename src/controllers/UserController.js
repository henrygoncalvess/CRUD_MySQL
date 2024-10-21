const database = require('../config/db.js')

class UserController{
    async index(req, res){
        try{
            const getQuery = await database.query(`SELECT * FROM ${process.env.TABLE}`)

            res.json(getQuery)

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

            const [ newUserQuery ] = await database.query(
                `INSERT INTO ${process.env.TABLE} (nome, nascimento, sexo, peso) VALUES (?, ?, ?, ?)`,
                [nome, nascimento, sexo, peso]
            )

            res.json(newUserQuery)

        } catch (error){
            res.sendStatus(400)
            throw error
        }
    }

    async update(req, res){
        try{
            const { usuario, ...updates } = req.body;

            if (!usuario){
                throw new Error(`O campo "usuario" é obrigatório.`);
            }

            const stringUpdates = []
            const values = []

            Object.keys(updates).forEach(key => {
                stringUpdates.push(`${key} = ?`)
                values.push(updates[key])
            })

            if (stringUpdates.length === 0){
                throw new Error("Nenhum dado para atualizar")
            }

            const updateQueryString = `UPDATE ${process.env.TABLE} SET ${stringUpdates.join(', ')} WHERE nome = ?`

            values.push(usuario)

            const [ updateQuery ] = await database.query(updateQueryString, values)

            res.json(updateQuery)

        } catch (error) {
            res.sendStatus(400)
            throw error
        }
    }

    async remove(req, res){
        try{
            const { usuario } = req.body

            const deleteQuery = await database.query(`DELETE FROM ${process.env.TABLE} WHERE nome = ?`,
                [usuario]
            )

            console.log(deleteQuery);

            res.json(deleteQuery)

        } catch (error) {
            res.sendStatus(400)
            throw error
        }
    }
}

module.exports = new UserController