FROM node:18.7.0

ENV REACT_APP_API_URL="https://devint-api.azurewebsites.net/api/v1"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
