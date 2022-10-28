# task-manager

Criação de um gerenciador de tarefas utilizando nodeJS

## Backend

Na parte do backend foram criadas as funções relativas à lógica de negócio do desafio. A API fornece funções como cadastro de um novo usuário, criação, remoção e listagem de tarefas.

### O que implementar a seguir?

- Documentação com swagger
- typeRoots para encurtar os imports
- Testes

## Frontend

    throw new Error('not implemented yet')

## Backend: Como subir o servidor

Vá para a pasta de nome **backend**. O primeiro passo é instalar as dependências do projeto com yarn ou npm. Verifique se você possui o [nodejs](https://nodejs.org/en/) instalado em sua máquina.

Com yarn:

    yarn

com npm:

    npm i

Certifique-se também de ter o [docker](https://www.docker.com/) instalado na máquina e digite o seguinte comando (caso não esteja usando linux não precisa do sudo).

    sudo docker-compose up

A partir desse momeno dois containers vão rodar a aplicação. Um para o banco de dados (PostgreSQL) e outro para a aplicaçã em NodeJs.

Crie as tabelas com o seguinte comando:

    yarn migration:up

Isso irá irá criar criar as tabelas por meio de comando SQL para que a aplicação possa fazer as persistência dos dados.

Ao terminar, você pode destruir os containers com CTRL+C.

## Rotas implementadas

### users

- POST: **/users**

  Criar o usuáio e armazena no banco de dados

  Body:

        {
            "name": "Joao Oliveira",
            "email": "joao@gmail.com",
            "age": 15,
            "password": "12345"
        }

  Response:

        {
            "name": "Joao Oliveira",
            "email": "joao@gmail.com",
            "age": 15,
            "password": "$2b$10$aifOON23UifhiIwv73o5Xun9L0zusQb.ERxJZuqcyKZW6WaQD5h7u",
            "created_at": "2022-10-28T20:42:04.558Z"
        }

- POST: **/users/login**

  Retorna o token de usuário para que seja a autenticação do usuário na aplicação.

  Exemplo:

        {
            "email": "joao@gmail.com",
            "password": "12345"
        }

  Response:

        {
            "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9hbyBPbGl2ZWlyYSIsImVtYWlsIjoiYWxleHdoZWVsZXJAZ21haWwuY29tIiwiaWF0IjoxNjY2OTg0MTk5LCJleHAiOjE2NjY5ODc3OTl9.wVA-POkQRN89TxV5AJWV2z5q7kd3Z0psn0JMTM3i0Eg"
        }

## tasks

- POST: **/tasks**

  Faz a criação da task e associa ao devido usuário. O token de usuário é passado via baeres Token

  Exemplo:

        {
            "title": "Dar banho no cachorro2",
            "description": "Não esquecer de levar para passear",
            "due_date": "2022-11-10T03:00:00.000Z"
        }

  Response:

        {
            "id": "5fcef3ed-b014-4156-be0b-62b976152745",
            "title": "Dar banho no cachorro2",
            "description": "Não esquecer de levar para passear",
            "due_date": "2022-11-10T03:00:00.000Z",
            "user_email": "alexwheeler@gmail.com",
            "created_at": "2022-10-28T19:28:44.091Z",
            "updated_at": "2022-10-28T19:28:44.091Z"
        }

- GET: **/tasks**

  Retorna nehuma ou várias tasks que foram criadas pelo usuário. O token deve ser passado via baerer token.

  Response:

        {
            "id": "5fcef3ed-b014-4156-be0b-62b976152745",
            "title": "Dar banho no cachorro2",
            "description": "Não esquecer de levar para passear",
            "due_date": "2022-11-10T03:00:00.000Z",
            "user_email": "alexwheeler@gmail.com",
            "created_at": "2022-10-28T19:28:44.091Z",
            "updated_at": "2022-10-28T19:28:44.091Z"
        }

- GET: **/tasks/{title}**

  Retorna nehuma ou várias tasks que contenham o nome buscado via pathParameters. O token deve ser passado via baerer token.

  Exemplo:

        url/tasks/Dar banho no cachorro

- DELETE: **/tasks/{title}**

  Deleta a task que tenha a correspondencia com o nome buscado. O token deve ser passado via baerer token

  Exemplo:

        url/tasks/Dar banho no cachorro
