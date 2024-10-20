# CRUD com MySQL

### licença e tecnologias utilizadas

<img src="https://img.shields.io/github/license/henrygoncalvess/API_RESTful?style=for-the-badge"> <img src="https://img.shields.io/badge/mysql-8.0.39-blue?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/express-4.21.1-black?style=for-the-badge&logoColor=black"> <img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black"> <img src="https://img.shields.io/badge/node-20.16.0-43853D?style=for-the-badge&logo=node.js"> <img src="https://img.shields.io/badge/npm-10.8.2-firebrick?style=for-the-badge&logo=npm&logoColor=firebrick"> <img src="https://img.shields.io/badge/postman-11.16.0-orange?style=for-the-badge&logo=postman">

Criando conexão com MySQL e utilizando minha API REST para fazer as quatro operações básicas de manipulação de dados. Aprenda a conectar seu MySQL e fique a vontade para estudar o código

  
<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Clonando Repositório](#clonando-repositório)
  - [Pré-requisitos](#pré-requisitos)
  - [Etapas](#etapas)
- [Instrução de uso](#instrução-de-uso)
- [Endpoints do CRUD](#endpoints-do-crud)
  
</details>

## Instrução de instalação

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

```repositorios\clonados```
``` bash
git clone https://github.com/henrygoncalvess/CRUD_MySQL.git
```

<br>

### Pré-requisitos
- **MySQL** - [Tutorial de instalação](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela)

Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação da API  
e a conexão com o MySQL é necessário que você possua as seguintes ferramentas:

- **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Para fazer requisições e testar a conexão com o banco:
- **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> Também é possível fazer requisições pela linha de comando.  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

### Etapas

comece criando seu projeto Node.js

`repositorios\clonados\CRUD_MySQL`
``` bash
npm init
```
em seguida, instale as dependências necessárias para o funcionamento do projeto.

`repositorios\clonados\CRUD_MySQL`
``` bash
npm install cors@4.24.1 mysql2@3.11.3 dotenv@16.4.5 express@4.21.1
```

<br>

## Instrução de uso

Inicie o servidor local.

`repositorios\clonados\CRUD_MySQL\src`
``` bash
node server.js
```

## Endpoints do CRUD

No Postman *ou na linha de comando*  
teste as respostas da conexão com o MySQL seguindo os **endpoints** abaixo.

> [!tip]
> acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/)  
> acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api)

<br>

Rota | Descrição
--- | :---:
***GET*** ` http://localhost:3000/api/user ` | Lista todas as informações da tabela - [ver JSON](#get---response)
***POST*** ` http://localhost:3000/api/new/user ` | Adiciona um novo item na tabela - [ver JSON](#post---request)
***PUT*** ` http://localhost:3000/api/update/user ` | Atualiza as informações da tabela - [ver JSON](#put---request)
***DELETE*** ` http://localhost:3000/api/delete/user ` | Deleta uma linha da tabela - [ver JSON](#delete---request)

<br>

### GET - ***Response***

``` json
[
  [
    {
      "nome": "Pedro",
      "nascimento": "2000-01-04T02:00:00.000Z",
      "sexo": "M",
      "peso": 80
    },
    {
      "nome": "Valentina",
      "nascimento": "1989-04-07T03:00:00.000Z",
      "sexo": "F",
      "peso": 62.1
    }
  ],
  [
    "nome": "VARCHAR(30) NOT NULL",
    "nascimento": "DATE(10) NOT NULL",
    "sexo": "ENUM('M','F') NOT NULL",
    "peso": "FLOAT"
  ]
]
```

### POST - ***Request***

``` json
em andamento...
```

***Response***
em andamento...

<br>

### PUT - ***Request***

``` json
em andamento...
```

***Response***
em andamento...

<br>

### DELETE - ***Request***

``` json
em andamento...
```

***Response***
em andamento...
