import express from 'express';
import 'dotenv/config';
import db from './db'

import teamRouter from './routes/teamRoute';
import playerRouter from './routes/playerRoute';
import matchRouter from './routes/matchRoute';
import leaderboardRouter from './routes/leaderboardRoute';
import coachRouter from './routes/coachRoute'

const PORT = 3001
const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'API funcionando!' }));
app.use('/teams', teamRouter);
app.use('/players', playerRouter);
app.use('/matches', matchRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/coaches', coachRouter);

db.sync().then(() => {
    console.log('Banco de dados conectado');
  }).catch((error) => {
    console.error('Erro ao conectar o banco de dados:', error);
  });

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
});

export default app;