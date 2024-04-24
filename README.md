# Desafio Desenvolvimento Web - Laboratório Bridge

Esse projeto foi criado por Andres Kindel Barbosa.

## Backend

Para o backend, foi utilizado Java com Springboot. As seguintes dependências foram utilizadas:

Spring Web: é um starter para a criação de aplicações web com Spring Boot. Ela inclui componentes essenciais para criar aplicativos web RESTful, como Spring MVC, Tomcat (o servidor web embutido), Jackson para manipulação de JSON, e outros recursos para manipulação de requisições HTTP.

Spring Boot Devtools: fornece ferramentas de desenvolvimento para acelerar o processo de desenvolvimento e depuração de aplicativos Spring Boot.

Spring Data JPA: starter para trabalhar com a API de Persistência Java (JPA).

PostgreSQL Driver: driver JDBC para o banco de dados PostgreSQL. É usado para conectar um aplicativo Spring Boot a um banco de dados PostgreSQL em tempo de execução.

## Frontend

Para o frontend, foi utilizado o framework React e para a estilização CSS nativo.

## Pré-requisitos

### Node.js e npm

### PostgreSQL

### Docker (opcional)

# Como rodar com Docker

Basta entrar na pasta principal do projeto 'contador-primos' e rodar no terminal os comandos `docker-compose build` e depois `docker-compose up`

Agora o app deve estar disponível para se utilizar no endereço http://localhost:3000/.

# Como rodar localmente

## Configurando o banco de dados

Primeiramente, é necessário rodar o PostgreSQL no localhost com a porta 5432.

Então, o próximo passo é criar um banco de dados com o nome `contadorprimos`.

Agora só resta modificar o arquivo `application.properties` no caminho `backend/src/main/resources` com o seu usuário e senha. O usuário padrão é 'postgres' e a senha padrão 'password'. Também é necessario mudar o `spring.datasource.url=` para `jdbc:postgresql://localhost:5432/contadorprimos`


## Backend

Na pasta `backend` rodar o comando `mvn install` no terminal, para instalar as dependências.

Executar o arquivo `ContadorPrimosApplication.java` na sua IDE de escolha (para o desenvolvimento foi utilizado Intellij).

## Frontend

Basta acessar a pasta `frontend` e utilizar o comando `npm install` no terminal.

Após isso, o comando `npm start` faz o frontend rodar.

Agora o app deve estar disponível para se utilizar no endereço http://localhost:3000/.