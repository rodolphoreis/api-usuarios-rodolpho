//import express from 'express';
const express = require('express');
const cors = require('cors');

const app = express();

let usuarios = [];

app.use(express.json());
app.use(cors());

function updateUserAttrs(index, payload) {
  usuarios[index].nome = payload.nome;
  usuarios[index].email = payload.email;
  usuarios[index].dataDeAniversario = payload.dataDeAniversario;
  usuarios[index].morada = payload.morada;
  usuarios[index].telefone = payload.telefone;
  usuarios[index].stack = payload.stack;
  usuarios[index].sobre = payload.sobre;
}

function findIndexWithID(id) {
  const index = usuarios.findIndex((usuarios) => {
    return usuarios.id === id;
  });
  return index;
}

app.get('/usuarios', (request, response) => {
  try {
    return response.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

app.post('/usuarios', (request, response) => {
  try {
    const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
    const id = crypto.randomUUID().toString();
    const payload = {
      id,
      nome,
      email,
      dataDeAniversario,
      morada,
      telefone,
      stack,
      sobre,
    };
    usuarios.push(payload);
    return response.status(201).json(usuarios);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

app.put('/usuarios/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
    const index = findIndexWithID(id);
    if (index) {
      const payload = {
        id,
        nome,
        email,
        dataDeAniversario,
        morada,
        telefone,
        stack,
        sobre,
      };
      usuarios[index] = payload;
      return response.status(200).json(usuarios[i]);
    }
    return response.status(404).json({ error: 'Usuário não encontrado' });
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

app.patch('/usuarios/:id', (request, response) => {
  try {
    const { id } = request.params;
    const { nome, email, dataDeAniversario, morada, telefone, stack, sobre } = request.body;
    const index = findIndexWithID(id);
    const payload = {
      nome: nome || usuarios[index].nome,
      email: email || usuarios[index].email,
      dataDeAniversario: dataDeAniversario || usuarios[index].dataDeAniversario,
      morada: morada || usuarios[index].morada,
      telefone: telefone || usuarios[index].telefone,
      stack: stack || usuarios[index].stack,
      sobre: sobre || usuarios[index].sobre,
    };
    updateUserAttrs(index, payload);
    return response.status(200).json(usuarios[index]);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

app.delete('/usuarios/:id', (request, response) => {
  try {
    const { id } = request.params;
    const index = findIndexWithID(id);
    usuarios.splice(index, 1);
    return response.sendStatus(204);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
