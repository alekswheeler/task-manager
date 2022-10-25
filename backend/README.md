# task-manager backend

Criação de um gerenciador de tarefas utilizando nodeJS

## Backend

Na parte do backend foram criadas as funções relativas à lógica de negócio do desafio. A API fornece funções como cadastro de um novo usuário, criação, remoção e listagem de tarefas.

## Como subir o servidor

Certifique-se de ter o [docker]() instalado na máquina e digite o seguinte comando (caso não esteja usando linux não precisa do sudo).

    sudo docker-compose up

A partir desse momeno dois containers vão rodar a aplicação. Um para o banco de dados (PostgreSQL) e outro para a aplicaçã em NodeJs.

Crie as tabelas com o seguinte comando:

    yarn migration:up

Isso irá rodar comandos SQL que vão criar as tabelas para que a aplicação possa fazer as persistência dos dados.
