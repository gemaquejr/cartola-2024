import express from 'express';
import 'dotenv/config';
import db from './db'

import teamRouter from './routes/teamRoute';

const PORT = 3001

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'API funcionando!' }));
app.use('/teams', teamRouter);

db.sync().then(() => {
    console.log('Banco de dados conectado');
  }).catch((error) => {
    console.error('Erro ao conectar o banco de dados:', error);
  });

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
});

export default app;