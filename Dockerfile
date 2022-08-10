FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ .

EXPOSE 8084

CMD ["npm", "run", "start"]
