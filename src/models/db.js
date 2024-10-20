require('dotenv').config()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
})

db.connect((erro) => {
    if (erro) throw erro;

    console.log('conectado');
});

db.end();