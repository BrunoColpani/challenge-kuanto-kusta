<h4 align="center"> 
	🚧  Challenge Kuanto Kusta 😺 Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

😺 Store API é uma aplicação backend baseada em microsseviços na qual a REST API faz as requisições em seus microsserviços respectivos e na resposta traz o dado requisitado.

---

## ⚙️ Funcionalidades
- [x] User registration:

{
  "email": "teste@email.com",
  "password": "abcde123"
}

- [x] Cadastro de usuários:
  - [x] userName, email e password.

- [x] Listagem e cadastro de produtos:
  - [x] productId e price.

- [x] Listagem e cadastro de carrinho de compras:
  - [x] userId e isOpen.

- [x] Listagem, cadastro e remoção de produtos no carrinho de compras:
  - [x] productId, shoppingCartId, price e quantity.

- Todo o usuario é um admim

---

## 🚀 Como executar o projeto

Este projeto é dividido em três partes:

1. Rest API (pasta store-api).
2. Shopping Cart Service (pasta shopping-cart-service).
3. Products Service (pasta products-service).

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disso, é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando a API (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Vá para a pasta backend
$ cd store-api

# Instale as dependências
$ yarn install

# Execute as migrations
$ npx typeorm migration:run -d dist/database.providers.js

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# O servidor inciará na porta:3005 - acesse http://localhost:3005

```

<p align="center">
  <a href="hhttps://github.com/BrunoColpani/challenge-kuanto-kusta/collection/challenge_kuanto_kusta.postman_collection.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### 🧭 Rodando o microsserviço shopping-cart-service (microsserviço)

```bash

# Clone este repositório
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Vá para a pasta backend
$ cd shopping-cart-service

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# O servidor inciará na porta:3000 

```

#### 🧭 Rodando o microsserviço products-service (microsserviço)

```bash

# Clone este repositório
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Vá para a pasta backend
$ cd products-service

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# O servidor inciará na porta:3001

```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/))

- **[Nestjs](http://knexjs.org/)**
- **[Class-tranformer](https://www.npmjs.com/package/class-transformer)**
- **[Class-validator](https://www.npmjs.com/package/class-validator)**
- **[Passport](https://www.passportjs.org/packages/passport-jwt/)**
- **[jsonwebtoken](https://jwt.io/)**
- **[mongoose](https://mongoosejs.com)**
- **[TypeORM](https://typeorm.io)**
- **[PostgreSQL](https://www.postgresql.org)**
- **[MongoDB](https://www.mongodb.com)**
- **[Docker](https://www.docker.com)**

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/bruno-colpani-0b1152138/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87588227?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Colpani</b></sub></a> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Bruno-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-colpani-0b1152138/)](https://www.linkedin.com/in/bruno-colpani-0b1152138/)
[![Gmail Badge](https://img.shields.io/badge/-bruno.colpani1@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:bruno.colpani1@gmail.com)](mailto:bruno.colpani1@gmail.com)

---

## Versões do README

[Inglês en](./README-EN.md)