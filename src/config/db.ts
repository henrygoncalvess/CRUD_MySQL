import mysql from 'mysql2/promise';

const database = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

export default database;