# CRUD com MySQL

Criando conexão com MySQL + TypeScript e utilizando minha API REST para fazer as quatro operações básicas de manipulação de dados. Aprenda a conectar seu MySQL e fique a vontade para estudar o código

<br>

**licença e tecnologias utilizadas**:  
<img src="https://img.shields.io/github/license/henrygoncalvess/CRUD_MySQL?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/mysql-8.0.39-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=gray"></a> <a href="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/express-4.21.1-000000?style=for-the-badge&logo=express&logoColor=black&labelColor=gray"></a> <a href="https://www.typescriptlang.org/docs/"><img src="https://img.shields.io/badge/typescript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-22.12.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-10.8.2-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a> 

**Dependências NPM**:  
<a href="https://www.npmjs.com/package/cors"><img src="https://img.shields.io/badge/cors-2.8.5-royalblue?style=for-the-badge&logo=cors&logoColor=black&labelColor=gray"></a> <a href="https://www.npmjs.com/package/dotenv"><img src="https://img.shields.io/badge/dotenv-16.4.5-ECD53F?style=for-the-badge&logo=dotenv&logoColor=yellow&labelColor=gray"></a> <a href="https://www.npmjs.com/package/mysql2"><img src="https://img.shields.io/badge/mysql2-3.11.3-white?style=for-the-badge&logo=mysql2&logoColor=yellow&labelColor=gray"></a>

**Ponto de Entrada**:  
<span><img src="https://img.shields.io/badge/server.js-333333?style=for-the-badge"></span>

**Caminho**:  
<span><img src="https://img.shields.io/badge/src/server.js-333333?style=for-the-badge"></span>

<br>

<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Configuração do Projeto](#configuração-do-projeto)
- [Instrução de uso](#instrução-de-uso)
- [Endpoints do CRUD](#endpoints-do-crud)
  - [GET - Response](#get---response)
  - [POST - Request](#post---request)
  - [PUT - Request](#put---request)
  - [DELETE - Request](#delete---request)
  
</details>

<br>

``` mermaid
---
title:  Estrutura de pastas
---
flowchart LR
    crud("📁 _CRUD_MySQL_")@{ shape: processes }
    crud --o build("📁 _build_")@{ shape: processes }
    crud ---o src("📁 _src_")@{ shape: processes }
    src --o config("📁 _config_")@{ shape: processes }
    config --- db.ts("📄 **db.ts**")@{ shape: card }
    src --o controllers("📁 _controllers_")@{ shape: processes }
    controllers --- UserController.ts("📄 **UserController.ts**")@{ shape: card }
    src --o models("📁 _models_")@{ shape: processes }
    models --- UserModel.ts("📄 **UserModel.ts**")@{ shape: card }
    src --o routes("📁 _routes_")@{ shape: processes }
    routes --- Users.ts("📄 **Users.ts**")@{ shape: card }
    src --- app.ts("📄 **app.ts**")@{ shape: card }
    src --- server.ts("📄 **server.ts**")@{ shape: card }
    env("⚙️ .env")

    %%CLASSES
    classDef default fill:#191919,color:white;
    
    classDef pasta fill:#403211,stroke:#c99e34,stroke-width:2px,color:#fff1cc;
    classDef envStyle fill:#000000,stroke:#000000,color:gray;

    %%aplicação de classes
    class crud,src,config,controllers,models,routes,build pasta
    class env envStyle



    %%LINKS
    
    %%pastas
    linkStyle 0,1,3,5,7 stroke:#f2c04b

    %%arquivos
    linkStyle default stroke-width:2px;

    click build "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/build"
    click src "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src"
    click config "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/config"
    click db.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/config/db.ts"
    click controllers "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/controllers"
    click UserController.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/controllers/UserController.ts"
    click models "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/models"
    click UserModel.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/models/UserModel.ts"
    click routes "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/routes"
    click Users.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/routes/Users.ts"
    click app.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/app.ts"
    click server.ts "https://github.com/henrygoncalvess/CRUD_MySQL/tree/main/src/server.ts"
```

<br>

## Instrução de instalação

### Pré-requisitos
- <img src="https://cdn.simpleicons.org/mysql/000000/ffffff?viewbox=auto" width=24>&nbsp; **MySQL** - [Tutorial de instalação](https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela)

Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação da API  
e a conexão com o MySQL é necessário que você possua as seguintes ferramentas:

- <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E/5FA04E?viewbox=auto" width=24>&nbsp; **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- <img src="https://cdn.simpleicons.org/npm/CB3837/CB3837?viewbox=auto" width=24>&nbsp; **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- <img src="https://cdn.simpleicons.org/typescript/3178C6/3178C6?viewbox=auto" width=24>&nbsp; **TypeScript** - [Tutorial de instalação](https://www.typescriptlang.org/download/)

Para fazer requisições e testar a conexão com o banco:
- <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37?viewbox=auto" width=24>&nbsp; **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> Também é possível fazer requisições pela linha de comando.  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

```repositorios\clonados```
``` bash
git clone https://github.com/henrygoncalvess/CRUD_MySQL.git
```

<br>

### Configuração do Projeto

#### 1. Inicialize o projeto Node.js

`repositorios\clonados\CRUD_MySQL`
``` bash
npm init
```

#### 2. Adicione o seguinte código ao package.json:

`repositorios\clonados\CRUD_MySQL\package.json`
``` json
"scripts": {
  "dev": "tsx --watch src/server.ts"
},
"dependencies": {
  "cors": "2.8.5",
  "dotenv": "16.4.5",
  "express": "4.21.1",
  "mysql2": "3.11.3"
},
"devDependencies": {
  "@types/cors": "2.8.17",
  "@types/express": "5.0.0",
  "@types/node": "22.10.1",
  "typescript": "5.7.2",
  "tsx": "4.19.2"
}
```

#### 3. com as dependências listadas em `package.json`, inicie a instalação.

`repositorios\clonados\CRUD_MySQL`
``` bash
npm install
```

#### 4. Inicialize o TypeScript e configure o arquivo `tsconfig.json`.

`repositorios\clonados\CRUD_MySQL`
``` bash
npx tsc --init
```

#### 5. Atualize o `tsconfig.json` com as seguintes configurações básicas:
_este padrão de arquivo typescript está de acordo com esta [documentação](https://github.com/tsconfig/bases)_  
_baseado na versão node utilizada_

`repositorios\clonados\CRUD_MySQL\tsconfig.json`
``` json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 22",
  "_version": "22.0.0",

  "compilerOptions": {
    "lib": ["es2023"],
    "module": "node16",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```

#### 6. crie o arquivo `.env` na raiz do projeto - `repositorios\clonados\CRUD_MySQL`, e configure as variáveis de acordo com seus dados do MySQL.

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

`repositorios\clonados\CRUD_MySQL`
``` bash
npm run dev
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
***GET*** ` http://localhost:3000/users ` | Lista todas as informações da tabela - [ver JSON](#get---response)
***POST*** ` http://localhost:3000/users ` | Adiciona um novo item na tabela - [ver JSON](#post---request)
***PUT*** ` http://localhost:3000/users ` | Atualiza as informações da tabela - [ver JSON](#put---request)
***DELETE*** ` http://localhost:3000/users ` | Deleta uma linha da tabela - [ver JSON](#delete---request)

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
