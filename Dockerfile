FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY tsoa.json ./

RUN yarn

EXPOSE 8000

CMD ["yarn", "run", "dev"]