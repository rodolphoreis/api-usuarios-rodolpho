# Backend do Projeto Formulário de Candidatura

Bem-vindo ao backend do Projeto Formulário de Candidatura! Este servidor Node.js e Express gerencia as operações CRUD para usuários, fornecendo uma API robusta para interagir com o frontend.

## Funcionalidades

- **Criação de Usuários:** Utilizando a rota `POST /usuarios`, você pode criar novos usuários fornecendo informações como nome, e-mail, data de aniversário, morada, telefone, stack e sobre.

- **Recuperação de Usuários:** A rota `GET /usuarios` permite recuperar a lista completa de usuários cadastrados.

- **Atualização de Usuários:** As rotas `PUT /usuarios/:id` e `PATCH /usuarios/:id` permitem a atualização completa ou parcial das informações de um usuário específico.

- **Remoção de Usuários:** A rota `DELETE /usuarios/:id` possibilita a exclusão de um usuário com base no seu identificador único.

## Configuração e Execução

1. Clone o repositório: git@github.com:rodolphoreis/api-usuarios-rodolpho.git
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm start`

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Desenvolvedor

Este backend foi criado em conjunto com o desenvolvedor [Marcell](https://github.com/marcelldac). Agradeço muito pela colaboração!

## Contribuição

Sinta-se à vontade para contribuir, relatar problemas ou propor melhorias. Agradecemos por fazer parte deste projeto!

## Contato

Se tiver dúvidas ou sugestões, entre em contato [rodolphoreis@live.com].
