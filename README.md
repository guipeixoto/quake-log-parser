# Quake III Arena = Log Parser API

## Heeeey dev 👨‍💻

O objetivo do projeto é construir uma API no modelo RESTFul, que faça a leitura do arquivo `games.log` e converter em object Javascript `(JSON)`.

Foi desenvolvido com a finalidade de desafio técnico para análise à uma vaga de dev.

Acesse [documentação da API](https://q3a-api-parser.netlify.app/).

---

## Pré-requisitos

* NodeJS - 12.x (LTS)
* Yarn - 1.22 (ou posterior) ou NPM

---

## Clonando o projeto
```console
$ yarn https://github.com/guipeixoto/quake-log-parser.git
$ cd quake-log-parser
```

---

## Instalando dependências
Após clonar o projeto em sua máquina e acessar o diretório, execute o comando abaixo instalar as dependências necessárias:
```console
$ yarn install
```

---

## Executando o projeto
Para executar o projeto em seu ambiente local, execute:
```console
$ yarn start
```

---

## Executando os tests
Para rodar os testes, o comando é:
```console
$ yarn test
```

---

## Tecnologias utilizadas

* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/) - Unit tests
* [Express](https://expressjs.com/pt-br/) - HTTP server
* [Celebrate](https://github.com/arb/celebrate) - Request validations
* [Line Header](https://github.com/nickewing/line-reader) - Reader file libe by line
