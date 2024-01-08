//import express from 'express';
const express = require('express');

const app = express();

let usuarios = [];

app.use(express.json());
app.get('/usuarios', (request, response) => {
  return response.status(200).json(usuarios);
});

app.post('/usuarios', (request, response) => {
  const { nome, email, senha, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
  const id = crypto.randomUUID().toString();
  const payload = {
    id,
    nome,
    email,
    senha,
    dataDeAniversario,
    morada,
    telefone,
    stack,
    sobre,
  };
  usuarios.push(payload);
  return response.status(201).json(usuarios);
});

app.put('/usuarios/:id', (request, response) => {
  const { id } = request.params;
  const { nome, email, senha, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === id) {
      const payload = {
        id,
        nome,
        email,
        senha,
        dataDeAniversario,
        morada,
        telefone,
        stack,
        sobre,
      };
      usuarios[i] = payload;
      return response.status(200).json(usuarios[i]);
    }
    return response.status(404).json({ error: 'Usuário não encontrado' });
  }
});

app.patch('/usuarios/:id', (request, response) => {
  const { id } = request.params;
  const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
  const index = usuarios.findIndex((usuarios) => {
    return usuarios.id === id;
  });

  usuarios[index].nome = nome || usuarios[index].nome;
  usuarios[index].email = email || usuarios[index].email;
  usuarios[index].dataDeAniversario = dataDeAniversario || usuarios[index].dataDeAniversario;
  usuarios[index].morada = morada || usuarios[index].morada;
  usuarios[index].telefone = telefone || usuarios[index].telefone;
  usuarios[index].stack = stack || usuarios[index].stack;
  usuarios[index].sobre = sobre || usuarios[index].sobre;

  return response.status(200).json(usuarios[index]);
});

app.delete('/usuarios/:id', (request, response) => {
  const { id } = request.params;
  const index = usuarios.findIndex((usuarios) => {
    return usuarios.id === id;
  });
  usuarios.splice(index, 1);
  return response.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
