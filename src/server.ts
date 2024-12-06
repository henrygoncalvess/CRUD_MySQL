import 'dotenv/config';
import app from './app';

app.listen(3000, () => {
    console.log('rodando')
})

process.on('uncaughtException', (error) => {
    console.error('Erro não tratado:', error);
    process.exit(1); // Encerra o processo
});