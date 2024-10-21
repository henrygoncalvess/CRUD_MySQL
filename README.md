# CRUD com MySQL

### licença e tecnologias utilizadas

<img src="https://img.shields.io/github/license/henrygoncalvess/CRUD_MySQL?style=for-the-badge&labelColor=gray&color=97ca00"> <img src="https://img.shields.io/badge/mysql-8.0.39-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=gray"> <img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"> <img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black&labelColor=gray"> <img src="https://img.shields.io/badge/node-20.16.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"> <img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"> <img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"> <img src="https://img.shields.io/badge/dotenv-16.4.5-ECD53F?style=for-the-badge&logo=dotenv&logoColor=yellow&labelColor=gray"> <img src="https://img.shields.io/badge/mysql2-3.11.3-white?style=for-the-badge&logo=mysql2&logoColor=yellow&labelColor=gray">

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

<br>

### Estrutura de pastas

├──**CRUD_MySQL/**  
│&nbsp; &nbsp; &nbsp;├──[src/](CRUD_MySQL/src)  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;├──[config/](CRUD_MySQL/src/config) _`conexão com banco de dados`_  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp; \`- - -[db.js](CRUD_MySQL/src/config/db.js)  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;├──[controllers/](CRUD_MySQL/src/controllers) _`lógica de negócio`_  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp; \`- - -[UserController.js](CRUD_MySQL/src/controllers/UserController.js)  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;├──[models/](CRUD_MySQL/src/models) _`modelos que lidam c/ banco de dados. consultas, manipulação etc.`_  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp; \`- - -[UserModel.js](CRUD_MySQL/src/models/db.js)  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp;└──[routes/](CRUD_MySQL/src/routes) _`rotas da API`_  
│&nbsp; &nbsp; &nbsp;│&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\`- - -[Users.js](CRUD_MySQL/src/routes/users.js)  
│&nbsp; &nbsp; &nbsp; \`- - -[app.js](CRUD_MySQL/src/app.js) _`lógica da aplicação`_  
│&nbsp; &nbsp; &nbsp; \`- - -[server.js](CRUD_MySQL/src/server.js) _`ponto de entrada da aplicação`_  
\`- - - ~~.env~~ _`configs de ambiente`_  

<br>

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

#### 1. crie seu projeto Node.js

`repositorios\clonados\CRUD_MySQL`
``` bash
npm init
```

#### 2. em seguida, instale as dependências necessárias para o funcionamento do projeto.

`repositorios\clonados\CRUD_MySQL`
``` bash
npm install cors@2.8.5 mysql2@3.11.3 dotenv@16.4.5 express@4.21.1
```

#### 3. crie o arquivo `.env` na raiz do projeto - `repositorios\clonados\CRUD_MySQL`, e configure as variáveis de acordo com seus dados do MySQL.

``` .env
HOST=seu_host #exemplo: localhost
USER=seu_usuario #exemplo: root
PASSWORD=sua_senha
DB=nome_do_seu_database
TABLE=sua_tabela
```

<br>

## Instrução de uso

Inicie o servidor local e veja [Endpoints do CRUD](#endpoints-do-crud) para testar as respostas do banco

`repositorios\clonados\CRUD_MySQL\src`
``` bash
node server.js
```

<br>

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

### Exemplo de Banco de Dados

``` python
+------------+---------------+------+---------+ +-----------+------------+------+------+
| Field      | Type          | Null | Default | | nome      | nascimento | sexo | peso |
+------------+---------------+------+---------+ +-----------+------------+------+------+
| nome       | varchar(30)   | NO   | NULL    | | Miguel    | 2004-10-29 | M    | 55.3 |
| nascimento | date          | NO   | NULL    | | Pedro     | 2001-02-04 | M    | 80.9 |
| sexo       | enum('M','F') | NO   | NULL    | | Valentina | 1989-04-07 | F    | 62.1 |
| peso       | float         | YES  | NULL    | +-----------+------------+------+------+
+------------+---------------+------+---------+
```

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
  .....
]
```

<br>

### POST - ***Request***

_nome, nascimento e sexo são obrigatórios_
``` json
{
    "nome": "novo usuario",
    "nascimento": "2021-11-01",
    "sexo": "M"
}
```

***Response***

``` json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0,
    "changedRows": 0
}
```

<br>

### PUT - ***Request***

_linha atual_
``` python
+-------+------------+
| nome  | nascimento |
+-------+------------+
| Pedro | 2001-02-04 |
+-------+------------+
```

***Request***

`"usuario"`: parâmetro para localizar a linha que será alterada.  
informar apenas os parâmetros a serem alterados
``` json
{
    "usuario": "Pedro",
    "nascimento": "1999-09-09"
}
```

***Response***

``` json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "Rows matched: 1  Changed: 1  Warnings: 0",
    "serverStatus": 34,
    "warningStatus": 0,
    "changedRows": 1
}
```

_linha alterada_
``` python
+-------+------------+
| nome  | nascimento |
+-------+------------+
| Pedro | 1999-09-09 |
+-------+------------+
```

<br>

### DELETE - ***Request***

_linha atual_
``` python
+--------------+------------+------+------+
| nome         | nascimento | sexo | peso |
+--------------+------------+------+------+
| Miguel       | 2004-10-29 | M    | 55.3 |
| Pedro        | 1999-09-09 | M    | 80.9 |
| Valentina    | 1989-04-07 | F    | 62.1 |
| novo usuario | 2021-11-01 | M    | 66.4 |
+--------------+------------+------+------+
```

***Request***

`"usuario"`: parâmetro para localizar a linha que será deletada  
``` json
{
    "usuario": "novo usuario"
}
```

***Response***

``` JSON
[
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 0,
    "info": "",
    "serverStatus": 34,
    "warningStatus": 0,
    "changedRows": 0
  },
  null
]
```

_linha alterada_
``` python
+-----------+------------+------+------+
| nome      | nascimento | sexo | peso |
+-----------+------------+------+------+
| Miguel    | 2004-10-29 | M    | 55.3 |
| Pedro     | 1999-09-09 | M    | 80.9 |
| Valentina | 1989-04-07 | F    | 62.1 |
+-----------+------------+------+------+
```
