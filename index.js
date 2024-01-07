const express = require('express');
const app = express();

let usuarios = [];

/*
 * CRUD - Operações básicas do banco de dados.
 * C - Create (criar) - post
 * R - Read (Ler) - get
 * U - Update (atualizar) - put || patch
 * D - Delete (deletar) - delete
 */

/* 
User Model

id: string
nome: string
email: string
senha: string

*/

app.use(express.json());
app.get('/usuarios', (request, response) => {
  return response.status(200).json(usuarios);
});

app.post('/usuarios', (request, response) => {
  const { nome, email, senha } = request.body;
  const id = randomUUID();
  const payload = {
    id,
    nome,
    email,
    senha,
  };
  usuarios.push(payload);
  return response.status(201).json(payload);
});

app.put('/usuarios/:id', (request, response) => {
  const { id } = request.params;
  const { nome, email, senha } = request.body;
  const payload = {
    nome,
    email,
    senha,
  };
  usuarios[id] = payload;
  return response.status(200).json(payload);
});

app.delete('/usuarios/:id', (request, response) => {
  const { id } = request.params;
  usuarios.splice(id, 1);
  return response.status(200).json(usuarios);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
