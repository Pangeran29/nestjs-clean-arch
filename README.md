<p align="center">
  <a href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" target="blank"><img src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg" width="200" alt="Clean Architecture" /></a>
</p>


if you want to know why we need to use clean architecture in our app, what's the goal and others you can check the documentation by uncle bob the creator at here https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html


## Description

This is how i intilize clean architecture pattern in my nestjs project. Clean architecture has three main layers but these layers is not how you structure the folder. These layer is how you should seperate your code to achive clean architecture. The three main layers are:
1. Entities </br>
Entities contains all the business entities that construct application
2. Use cases </br>
Use cases is managing all bussiness logic of our application. This use cases is also seperate by many layer too like repository layer and so on
3. Controller </br>
Controller is layer where outside world interacting with our service

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
