const express = require('express');
const app = express();

let usuarios = [];

app.use(express.json());
app.get('/usuarios', (request, response) => {
  return response.status(200).json(usuarios);
});

app.post('/usuarios', (request, response) => {
  const { nome, email, senha } = request.body;
  const id = crypto.randomUUID().toString();
  const payload = {
    id,
    nome,
    email,
    senha,
  };
  usuarios.push(payload);
  return response.status(201).json(usuarios);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
