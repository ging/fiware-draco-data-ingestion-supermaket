FROM node:18

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 3001
CMD ["npm","start"]