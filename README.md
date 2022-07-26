

## Tools & Technologies
- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- Nodejs
- Javascript/Typescript
- Mongodb
- docker
- jest


## How did I approach the problem?

I have used the Nest js framework, under the hood it uses the express js framework. If you are from java world, Nest js is a being developed on same concepts like spring boot for example dependency injection.
It comes with typescript support, testing setup, security and much more. 

Traditional/simple architecture
- The controllers layer handles HTTP requests and delegates tasks to the services layer.
- The services layer is where most of the business logic lives.
- Services use repositories / DAOs to change / persist entities.
- Entities act as containers for the values, with setters and getters.

 Instead of going with simple one, I have tried to implement the clean architecture. The main idea is to separate infrastructure from domain (business)

**WHY**
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
- Create .env file and set environment variables. Please check .env.example file for reference. For db name, you can check [docker-compose](https://github.com/Irfanbsse2060/e-commerce/blob/main/docker-compose.yml) file as well.

- For adding data in db, check Migration section of read me.
```bash
# Before running app, make sure db instance is running 
$ npm run db:dev:up

# development
$ npm run start # start the server on port 3000

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
$ npm run db:test:up # spin up test db
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
