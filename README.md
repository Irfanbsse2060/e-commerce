

## Tools & Technologies
- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- Nodejs
- Javascript/Typescript
- Mongodb
- docker
- jest


## How did I approach the problem?

I have used the Nest js framework, under the hood it uses the express js framework. If you are from java world, Nest js is a kinda copy of Spring boot.

I could use a simple controller and services-based architecture where the controller contains the endpoint and the service layer contains all of your business logic. It could work in this case as well But to show a better architecture IMO, I have tried to implement the clean architecture.

**Why?**
- Independent of Frameworks
- Testable
- Independent of Database

**Code structure:**
- [src](https://github.com/Irfanbsse2060/e-commerce/tree/main/src) folder contains most of the src code
- [infrastructure](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/infrastructure) folder contains all the code related to infra/framework for example database, and controllers.
- [domain](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/domain) and [usecases](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/usecases)  folder contain core business logic
- [test](https://github.com/Irfanbsse2060/e-commerce/tree/main/test) folder contains e2e tests.
- [migration](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/infrastructure/migrations) and [migration.utils](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/infrastructure/migrations-utils) folder contains migration script. I have added a migration script to load data into db
- [mocks](https://github.com/Irfanbsse2060/e-commerce/tree/main/src/mocks) folder contains mock data for testing and migration

## Prerequisite
- Node version v14.17.5 plus
- Docker for running db

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

# development with watch mode
$ npm run start:dev
```

```bash
# production mode
$ npm run build
$ npm run start:prod
```

## Test

For testing, I have followed testing pyramid, more unit tests and less e2e tests. 
In unit testings, I have tried to covered most of the cases and in e2e we have one positive and one negative case.

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


## Other useful commands
```bash
$ npm run db:dev:up # spin up mongo dev db
$ npm run db:dev:down # kill mongo dev db instance
$ npm run db:test:up # spin up mongo test db
$ npm run db:test:down # kill mongo test db instance

$ npm run lint # fix the linting issue
```

## Stay in touch

- Author - [Irfan Ali](https://github.com/Irfanbsse2060)
