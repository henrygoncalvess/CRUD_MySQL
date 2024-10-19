const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rockmysql242623',
    database: 'cadastro'
})

db.connect((erro) => {
    if (erro) throw erro;

    console.log('conectado');
});

db.query('SELECT * FROM gafanhotos', (erro, resposta) => {
    if (erro) throw erro;
    
    console.log(resposta);
});

db.end();