const database = require('../config/db.js');

class UserModel{
    static async findAll(){
        const [ getQuery ] = await database.query(`SELECT * FROM ${process.env.TABLE}`)

        return getQuery
    }

    static async create({ nome, nascimento, sexo, peso }){
        if (!nome || !nascimento || !sexo){
            throw new Error(`Os campos "nome", "nascimento" e "sexo" são obrigatórios.`);
        }

        const [ newUserQuery ] = await database.query(
            `INSERT INTO ${process.env.TABLE} (nome, nascimento, sexo, peso) VALUES (?, ?, ?, ?)`,
            [nome, nascimento, sexo, peso]
        )

        return newUserQuery
    }

    static async update(usuario, updates){
        if (!usuario){
            throw new Error(`O campo "usuario" é obrigatório.`);
        }

        // captura as chaves de "updates"... o "map" normalmente retorna um array com os resultados...
        // então aqui, ele retorna um array com strings relacionadas as chaves -> chave = peso -> "peso = ?".
        // em seguida, as strings do array se tornam uma só, com a junção de "," utilizando o ".join()"
        const stringOfUpdates = Object.keys(updates).map(key => `${key} = ?`).join(', ')

        // captura os valores de "updates" e retorna um array
        // em seguida, adiciona o usuário na última posição do array de valores
        const values = Object.values(updates).concat(usuario)

        if (stringOfUpdates.length === 0){
            throw new Error("Nenhum dado para atualizar")
        }

        const [ updateQuery ] = await database.query(
            `UPDATE ${process.env.TABLE} SET ${stringOfUpdates} WHERE nome = ?`,
            values
        )

        return updateQuery
    }

    static async remove(usuario){
        const deleteQuery = await database.query(`DELETE FROM ${process.env.TABLE} WHERE nome = ?`,
            [usuario]
        )

        return deleteQuery
    }
}

module.exports = UserModel