const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const { router: authRouter, checkAuth } = require('./auth');

app.use('/', authRouter);

app.get('/caisse', checkAuth, (req, res) => {
  res.json({ message: `Caisse OK pour rôle : ${req.user.role}` });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
