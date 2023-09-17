# `Projeto Trybe Futebol Clube(TFC) - Node - Typescript `

## Visão Geral
Este projeto foi desenvolvido com base em uma aplicação Front-End já existente, criada durante o curso de desenvolvimento web na Trybe. A missão deste projeto foi construir uma **API** que fornece informações sobre partidas e **classificações de futebol** para um site informativo.

Durante o desenvolvimento, foi criado um back-end **dockerizado** usando modelagem de dados através do **Sequelize**. Respeitamos as **regras de negócio** definidas no projeto e construímos o mesmo usando a linguagem **Typescript**, o banco de dados **MySql** e uma API RESTful. E também, o desenvolvimento foi feito seguindo os princípios da Programação Orientada a Objetos (**POO**).

Para adicionar uma partida, é necessário possuir um **token** de autenticação, gerenciado pelo **JWT**(Jason Web Token), o que requer que o usuário esteja logado para fazer alterações. Estabelecemos um **relacionamento** entre as **tabelas** `teams` e `matches` para facilitar as atualizações das partidas. Abaixo, você encontrará mais informações sobre como utilizar a API.

<br>

<details>
<summary><strong> 🗄️ Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - É container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.
  - Durante a execução dos testes sempre vai ser acessado pelo `sequelize` e via porta `3306` do `localhost`;


2️⃣ **Back-end:**
 - É o ambiente que foi realizado a maior parte das implementações exigidas.
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - A aplicação deve ser inicializada a partir do arquivo `app/backend/src/server.ts`;

3️⃣ **Front-end:**
  - O front já estava concluído, e não foi necessário realizar modificações no mesmo. A única exceção será seu Dockerfile que precisou ser configurado.
  - Todos os testes a partir do requisito de login usam o `puppeteer` para simular uma pessoa acessando o site `http://localhost:3000/`;
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que você deve construir nos requisitos.


4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up`;

</details>

## Tecnologias utilizadas:

- Node
- Typescript
- Express
- Sequelize
- Sequelize Associations 1:N e N:N
- JWT
- bcryptjs npm
- MySQL
- MySQL Workbench
- Thunder Client (Clientes Rest)
- Testes de Integração utilizando Mocha, Chai, ChaiHTTP e Sinon
- Docker
- Arquitetura MVC com princípios de POO
- Linux
- VS Code
- Git
- Github

<br>

<details>
  <summary><strong>🎲 Banco de dados</strong></summary>
  <br/>

  *Diagrama de Entidade-Relacionamento (DER)*

  ![Exemplo banco de dados](assets/diagrama-er.png)
</details>

<br>

<details>
<summary>🗄️ <strong>Execução do projeto</strong></summary><br>

Para executar, clone esse repositório:

    git clone git@github.com:Leandro-Bertholini/trybe_futebol_clube-typescript_sequelize.git

Na pasta do projeto, rode o comando:

    npm install

**OBS:** esse script vai instalar todas as dependencias do front e back.

Para iniciar os containers:

    npm run compose:up

Banco de dados apontado para a porta:

    3306:3306

O front se comunica com serviço de back-end pela url:

    http://localhost:3001

**OBS:** Certifique-se de ter alguma ferramenta para solicitação HTTP instalado na sua máquina.

Para simular uma pessoa acessando o site:

    http://localhost:3000/

</details>

<br>

![Exemplo app front](assets/front-example.png)

<br>

### Endpoints/Rotas

<details>
  <summary><strong>Login<strong></summary>

- Login  do usuário:

`Post`|  /login

Nessa requisição POST é necessário informar o JSON:

```
{
  "email": "admin@admin.com",
  "password": "secret_admin"
}
```
<br>
Exemplo de Retorno com o (status: 200):

```json
{
  "token": token aqui
}
```

Caso de erro (status: 400):
```json
{
  "message": "All fields must be filled"
}
```
Caso de erro (status: 401):
```json
{
  "message": "Invalid email or password"
}
```

</details>

<br>

<details>
  <summary><strong>Teams<strong></summary>

- Capturar todos os times:

`Get`| /teams

Exemplo de Retorno com o (status: 200):

```json
[
  {
    "id": 1,
    "teamName": "Botafogo"
  },
  {
    "id": 2,
    "teamName": "Corinthians"
  },
  ...
  {
    "id": 6,
    "teamName": "Ferroviária"
  },
  {
    "id": 16,
    "teamName": "São Paulo"
  }
]
```

- Capturar um time por ID:

`Get`| /teams/:id

Exemplo de retorno (status: 200):

```json
  {
	"id": 6,
	"teamName": "Ferroviária"
  }
```

</details>

<br>

<details>
  <summary><strong>Pessoas Usuárias e Credenciais de acesso<strong></summary>

- Avalia se o usuário é o administrador ou qual é a função através do token:

`Get`|  /login/role

Caso de retorno (status: 200):
```json
{
  "role": "admin"
}
```
Caso de retorno (satus: 401):
```json
{
 "message": "Token not found"
}

E também a possibilidade:

{
  "message": "Token must be a valid token"
}
```

</details>

<br>

<details>
  <summary><strong>Matches<strong></summary>

- A página apresentará todos os dados de partidas sem nenhum filtro:

`Get`| /matches

Caso de retorno (status: 200):
```json
[
  {
    "id": 4,
    "homeTeamId": 13,
    "homeTeamGoals": 3,
    "awayTeamId": 4,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Ferroviária"
    }
  },
  ...
  {
    "id": 54,
    "homeTeamId": 7,
    "homeTeamGoals": 1,
    "awayTeamId": 9,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Palmeiras"
    },
    "awayTeam": {
      "teamName": "São Paulo"
    }
  },
  {
    "id": 48,
    "homeTeamId": 11,
    "homeTeamGoals": 1,
    "awayTeamId": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Corinthians"
    }
  }
]
```

<br>

- Retorna todos as partidas cadastradas em progresso:

`Get`|  /matches?inProgress=true

Caso de retorno (status: 200):

```json
[
  {
    "id": 14,
    "homeTeamId": 15,
    "homeTeamGoals": 2,
    "awayTeamId": 7,
    "awayTeamGoals": 0,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Atlético Mineiro"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  ...
  {
    "id": 39,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 3,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Real Brasília"
    }
  }
]
```
Caso de retorno (status: 500):
```json
{
  "message": "Invalid parameter"
}
```

<br>

### Outras Ações:

- Retorna todos as partidas cadastradas finalizadas:

`Get`|  /matches?inProgress=false

<br>

- Criação de uma nova partida:

`Post`|  /matches

<strong>OBS.:</strong> Nesta requisição POST, é necessário informar o JSON:

```
{
  "homeTeam": 16, // O valor deve ser o id do time
  "awayTeam": 8, // O valor deve ser o id do time
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true
}
```

<br>

- Atualiza a chave 'inProgress' para finalidado de uma partida específica:

`Patch`|  /matches/:id/finish

<br>

 - Atualiza os gols de uma partida específica:

 `Patch`|  /matches/:id

 OBS.: Nesta requisição PATCH para atualizar os gols realizados, é necessário informar o seguinte JSON:

```
{
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}
```

</details>

<br>

### 👉 Criação do Projeto:

- Trybe Curso de Desenvolvimento Web

### ☝ Desenvolvimento da Aplicação:

- Leandro Bertholini





