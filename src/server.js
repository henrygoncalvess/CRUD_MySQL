require('dotenv').config()
const app = require('./app.js')

app.listen(3000, () => {
    console.log('rodando')
})

process.on('uncaughtException', (error) => {
    console.error('Erro não tratado:', error);
    process.exit(1); // Encerra o processo
});