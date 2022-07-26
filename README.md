<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
**Tools & Technologies**
- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- Nodejs
- Javascript/Typescript
- Mongodb
- docker
- jest


**How did I approach the problem?**

I have used the Nest js framework, under the hood it uses the express js framework. If you are from java world,  Nest js is a kinda copy of Spring boot.

I could use a simple controller and services-based architecture where the controller contains the endpoint and the service layer contains all of your business logic. It could work in this case as well But to show a better architecture IMO, I have tried to implement the clean architecture.

**Why?**
- Independent of Frameworks
- Testable
- Independent of Database

**Code structure:**
- src folder containing all of the src code
- Infrastructure contains all of the code related to infra/framework for example database, and controllers.
- domain and use cases  folder contain core business logic
- test folder contains e2e tests.
- migration and migration.utils folder contains migration script. we have added a migration script to load data into db


## Prerequisite
Node version v14.17.5 plus

## Installation

```bash
$ npm install
```

## Running the app
Create .env file and set environment variables. Please check .env.example file for reference

```bash
# Before running app, make sure db instance is running 
$ npm run dev:db:up

# development
$ npm run start

# watch mode
$ npm run start:dev
```

```bash
# production mode
$ npm run start:prod
```

## Test

For testing, I have followed testing pyramid, more unit test and less e2e tests. 
In unit testings, i have tried to covered most of the cases and in e2e we have one positive and one negative case.

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

In case of e2e, we are connecting to a separate test database. Make sure test db is up and running.
```bash
# e2e tests
$ npm run test:db:up # spin up test db
$ npm run test:e2e


```


## Migration
For adding products data into db, please run following command. Make sure database instance is running and env variables are set.
```bash
# For applying migration 
$ npm run migrate:up

# For reverting migration
$ npm run migrate:down
```

## Stay in touch

- Author - [Irfan Ali](https://github.com/Irfanbsse2060)
