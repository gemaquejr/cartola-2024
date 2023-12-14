const express = require('express');

const app = express();

const teamRouter = require('./routes/teamRoute');

app.get('/', (_req, res) => res.status(200).json({ message: 'API funcionando!' }));

app.use('/teams', teamRouter);

module.exports = app;