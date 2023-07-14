<h4 align="center"> 
	🚧  Challenge Kuanto Kusta 😺 Completed 🚀 🚧
</h4>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#-features">Features</a> •
 <a href="#-how-to-run-the-project">How to Run</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#-author">Author</a> • 
</p>

## 💻 About the project

😺 Store API is a microservices-based backend application where the REST API makes requests to its respective microservices and returns the requested data.

---

## ⚙️ Features

- [x] User registration:
  - [x] userName, email, and password.

- [x] Listing and registration of products:
  - [x] productId and price.

- [x] Listing and registration of shopping carts:
  - [x] userId and isOpen.

- [x] Listing, registration, and removal of products from the shopping cart:
  - [x] productId, shoppingCartId, price, and quantity.

---

## 🚀 How to Run the Project

This project is divided into three parts:

1. Rest API (store-api folder).
2. Shopping Cart Service (shopping-cart-service folder).
3. Products Service (products-service folder).

### Prerequisites

Before you start, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). It is also recommended to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/).

#### 🎲 Running the API (server)

```bash

# Clone this repository
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Go to the backend folder
$ cd store-api

# Install the dependencies
$ yarn install

# Run the migrations
$ npx typeorm migration:run -d dist/database.providers.js

# Run the application in development mode
$ yarn start:dev

# The server will start on port 3005 - access http://localhost:3005

```
<p align="center">
  <a href="hhttps://github.com/BrunoColpani/challenge-kuanto-kusta/collection/challenge_kuanto_kusta.postman_collection.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### 🎲 Running the shopping-cart-service (microservice)

``` bash
# Clone this repository
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Go to the backend folder
$ cd shopping-cart-service

# Install the dependencies
$ yarn install

# Run the application in development mode
$ yarn start:dev

# The server will start on port 3000 

```

### 🎲 Running the products-service (microservice)

``` bash
# Clone this repository
$ git clone git@github.com:BrunoColpani/challenge-kuanto-kusta.git

# Go to the backend folder
$ cd products-service

# Install the dependencies
$ yarn install

# Run the application in development mode
$ yarn start:dev

# The server will start on port 3001 

```

---

## 🛠 Technologies

The following tools were used in the construction of the project:


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

## README Versions

[Portuguese (pt-br)](./README-PT.md)