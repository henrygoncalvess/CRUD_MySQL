const mysql = require('mysql2')

const database = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}).promise();

database.connect(erro => {
    if (erro) throw erro

    console.log(erro);
})

module.exports = database