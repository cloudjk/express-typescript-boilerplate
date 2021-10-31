# Express-Typescipt-Jest-Swagger Boilerplate

<!-- badge icon: https://simpleicons.org/ -->
<!-- markdown testing: https://www.easyme.online/d OR https://dillinger.io/ -->

![nodejs](https://img.shields.io/badge/nodejs-v14-green?style=flat-square&logo=Node.js&logoColor=#339933)
![express](https://img.shields.io/badge/express-v4-orange)
![typescript](https://img.shields.io/badge/typescript-v4-green?style=flat-square&logo=Typescript&logoColor=#3178C6)
![jest](https://img.shields.io/badge/jest-v27-red?style=flat-square&logo=Jest&logoColor=#C21325)
![nodemon](https://img.shields.io/badge/nodemon-v2-lime?style=flat-square&logo=Nodemon&logoColor=#76D04B)
![swagger-ui-express](https://img.shields.io/badge/swaggerUiExpress-v4-silver)
![axios](https://img.shields.io/badge/axios-v0-blue)
![cors](https://img.shields.io/badge/cors-v2-lime)
![dotenv](https://img.shields.io/badge/dotenv-v10-yello)
![helmet](https://img.shields.io/badge/helmet-v4-red)
![tsoa](https://img.shields.io/badge/tsoa-v3-navy)
![winston](https://img.shields.io/badge/winston-v3-purple)

## Features

- Create nodejs boilerplate based on express framework
- All codebase is written in 100% typescript
- Swagger-ui-express was used for Open API 3.0
- Used dotenv for environment configuration
- For security, helmet is used

Express-Typescript-Jest-Swagger Boilerplate is a boilerplate based on express framework and typescript.
All codes are written 100% typescript and for documentation, swagger-ui-express was used.

## Tech

Boilerplate uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Swagger-ui-express] - documentation based on OpenAPI Swagger
- [Jest] - unit testing
- [typescript] - provide typing for javascript

## Installation

Boilerplate requires [Node.js](https://nodejs.org/) v14 to run.

Clone the code using git clone command

```sh
# clone repo
git clone git@github.com:cloudjk/express-typescript-boilerplate.git

# install dependencies
yarn install

# run
yarn dev
```

For production environments...

```sh
yarn install --production
NODE_ENV=production yarn start
```

## License

MIT
